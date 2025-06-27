import Jobs from "../models/Job.js"
import Candidate from "../models/Candidate.js"

export const getHrDashboard= async (req,res)=>{

    try {
        // console.log(req.user.email)
        const jobs = await Jobs.find({postedBy: req.user.email}).lean();
        const result = await Promise.all(

            jobs.map(async (job)=>{
                const candidates=await Candidate.find({jobId:job._id}).select('name email phone testScore passedTest').lean()
                return{
                    ...job,
                    candidates
                }


            })
        )
        res.status(200).json({success:true,jobs:result})
    } catch (error) {
        console.log("error in hrcontroller    "+error)
        res.status(500).json({success:false,message:"error in frtching"})
    }

}