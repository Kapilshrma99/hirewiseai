import Candidates from '../models/Candidate.js';
import Jobs from '../models/Job.js';
import {scheduleTestForCandidates} from "../services/testService.js"

export const submitApplication=async (req,res)=>{
    try{
    const {jobId}=req.params;
    const { name, email, phone, resumeLink } = req.body;


    const candidate =new Candidates({
    jobId,
    name,
    email,
    phone,
    resumeLink
    })
    await candidate.save()

    const TotalCandidates = await Candidates.countDocuments({jobId});
    if(TotalCandidates>=5)
        {
            console.log("trigger email");
            await scheduleTestForCandidates(jobId);

        } 


    res.status(201).json({success:true,candidate})

    }catch(err){
        console.log("error in from contrller    "+ err)
        res.status(500).json({success:false,message:"connection failed"})

    }

}