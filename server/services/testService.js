import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'
import Test from "../models/Test.js"
import Candidate from "../models/Candidate.js";
import { sendTestEmail } from "./emailService.js";
dotenv.config()

const API_KEY=process.env.REACT_APP_GEMINI_API_KEY



const ai = new GoogleGenerativeAI(API_KEY);
export const scheduleTestForCandidates=async (jobId)=>{

        try {
    // Prompt for test generation
    const prompt = `
    Generate 10 multiple-choice questions for a frontend developer role.
    Each question should have 4 options and specify the correct answer.
    Format:
    Question: ...
    Options: A) ..., B) ..., C) ..., D) ...
    Answer: A
    not using any kind of numbering and styling.
    `;

    
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" }); 
    const result = await model.generateContent(prompt);
    const resp=result.response;
    
    const rawText = (await resp.text()).trim();
          // console.log("rawtext is  "+rawText)
    // Convert raw text to structured questions (simple parser)
    const questionBlocks = rawText.split('Question: ').slice(1);
    // console.log("question is "+questionBlocks)
    const questions = questionBlocks.map((block) => {
      const [q, rest] = block.split('Options:');
      const optionsLine = rest.split('Answer:')[0].trim();
      const correct = rest.split('Answer:')[1].trim();

      const options = optionsLine
        .replace(/[A-D]\)/g, '|')
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean);

      return {
        type: 'MCQ',
        question: q.trim(),
        options,
        correctAnswer: correct,
      };
    });

    // Save to DB
    
    const test = new Test({ jobId, questions });
    await test.save();
    const candidates = await Candidate.find({jobId})
    for(let candidate of candidates){

      await sendTestEmail(candidate,jobId)
      
    }

    console.log(`✅ Test generated and saved for job ${jobId}`);
  } catch (error) {
    console.error('❌ Failed to generate test:', error.message);
  }
}