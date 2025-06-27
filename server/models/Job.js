import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    role: String,
    company: String,
    salaryRange: String,
    location: String,
    jobType: String,
    description: String,
    postedBy: String ,
    createdAt: {
        type: Date,
        default: Date.now,
}});

const Jobs = mongoose.model('Jobs', JobSchema);
export default Jobs;