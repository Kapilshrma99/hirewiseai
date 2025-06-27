import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'

dotenv.config()
const API_KEY=process.env.REACT_APP_GEMINI_API_KEY
const ai = new GoogleGenerativeAI(API_KEY);

export const generateJobDescription = async (req,res)=>{
  try{
  // console.log("descriptiom")
  const { role, company, location, salary } = req.body;//new
  const prompt = `Generate a job description for a ${role} at ${company}, located in ${location}, offering a salary of ${salary}.`;


    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" }); 
    const result = await model.generateContent(prompt);
    const resp=result.response;
    const text =  resp.text()
    res.status(200).json({ success: true, description: text });
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
  // console.log(resp.text());
  }catch(err){
    console.log(err)
     res.status(500).json({ success: false, message: "Failed to generate description" });
  }
  
  
  
}
