import { generateJobDescription } from '../services/openaiService.js';
import Jobs from '../models/Job.js';
// import { response } from 'express';

export const createJob= async (req,res) => {
    //it is save job in mongodb.
    // console.log("creation")
    try{
        const {role, company, salaryRange, location, jobType,description} =req.body;
        // const {role, company, salaryRange, location, jobType} ={role:"xy",company:"yz",salaryRange:20000,location:"dal",jobType:"sdsf"};

        // const description = await generateJobDescription({
        //     role, company, location, salary: salaryRange
        // }); // it gives us the description of job.

        // console.log(description)
        const newJob = new Jobs({ role, company, salaryRange, location, jobType, description, postedBy: req.user.email});
        // console.log(newJob)
        await newJob.save();
        res.status(201).json({success:true,newJob,description,jobId: newJob._id})

    }catch(error){
        console.log("error in jobcontroller.js   "+ error)
        res.status(500).json({success:false,message:"failed to create job"})
    }
}