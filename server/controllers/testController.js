import Test from "../models/Test.js";
import Candidate from "../models/Candidate.js"
import {sendResultEmail} from "../services/emailService.js"

export const getTestByJobId=async (req,res)=>{
    try {
        const {jobId} =  req.params;
        // console.log(jobId)
        const test= await Test.findOne({jobId});
        // console.log(test.questions)
        if(!test){
            return res.status(404).json({success:false,message:'Test not found'})
        }
        res.status(200).json({success:true,question:test.questions})
    } catch (error) {
        res.status(500).json({success:false,message:'server error'})
    }
}


export const submitTest=async (req,res)=>{
    try {
        const {candidateId,jobId,answers}=req.body
        const test= await Test.findOne({jobId});
        // console.log(test)
        if(!test){
            return res.status(404).json({success:false,message:'Test not found'})
        }

        let score=0;
        test.questions.forEach((q,idx)=>{
            // console.log("laskdf")
           const userAns= answers[idx];
           if(userAns && userAns===q.correctAnswer){
            score++;
           }
        })


        const total=test.questions.length
        const percentage=(score/total)*100
        const passed = percentage>=60


        await Candidate.findByIdAndUpdate(candidateId,{
            testScore:score,
            passedTest:passed
        })
        const candidate = await Candidate.findById(candidateId);
        await sendResultEmail(candidate, percentage, passed);
        res.status(200).json({success:true,meessage:"test submitted",score:percentage})
    } catch (error) {
        console.log("error in test controller     "+error)
        res.status(500).json({success:"false",message:"server error"})
    }
}