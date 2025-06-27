import Hr from "../models/Hr.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'seceret key';

// signup of hr
export const signUpHr=async (req,res)=>{
    const {name,email,password}=req.body;
    // console.log(req.params)
    try {
        const existingHr=await Hr.findOne({email})
        if(existingHr) return res.status(400).json({message:'Hr already exists'});

        // console.log(password)
        const hashedPassword = await bcrypt.hash(password, 10);
        const newHr=new Hr({name,email,password:hashedPassword})
        await newHr.save()

        const token= jwt.sign({email},JWT_SECRET,{expiresIn: '2h'});
        console.log("successful")
        res.status(201).json({token})

    } catch (error) {
        console.log("error in authController   "+error)
        res.status(500).json({message:"error in creation of hr"});
        
    }
}

//Login of hr
export const loginHr= async (req,res)=>{
    const {email,password} =req.body;

    try {
        const hr=await Hr.findOne({email})
        // console.log(hr)
        if(!hr) return res.status(404).json({message:"hr not found"})
        const valid= await bcrypt.compare(password,hr.password)

        if(!valid) return res.status(401).json({message:"wrong password"})
        const token= jwt.sign({email,id:hr._id},JWT_SECRET,{expiresIn: '2h'});

        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"login failed"})
        
    }
}