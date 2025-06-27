import mongoose from "mongoose"
const hrSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email:{type:String, required: true, unique:true},
    password:{type: String, required:true}
});

export default mongoose.model('Hr',hrSchema);