const adminSchema = require('../Schemas/admin')
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
const SECRET_KEY=`${process.env.ADMIN_SECRET_KEY}`;
const signUp = async(req,res) => {
  const {username,email,password} =req.body;
  try {
    const ifExist = await adminSchema.findOne({email : email})
    if(ifExist) return res.status(400).json({message:"user already exist"})
    const hashPassword = await bcrypt.hash(password,10)
    const result = await adminSchema.create({
        email:email,
        password:hashPassword,
        username:username,
        role:'admin'
    })
    const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)
    res.status(201).json({user:result,token:token})
  } catch (error) {
    console.log("error in SignUP",error.message)
    res.status(500).json({message:"Something went wrong in Admin SignUP"})
  }
}
const signIn = async(req,res) => {
    const {email,password} =req.body;
    try {
      const existingUser = await adminSchema.findOne({email : email})
      if(!existingUser) return res.status(404).json({message:"User not found"})
      const matchPassword =await bcrypt.compare(password,existingUser.password)
      if(!matchPassword) return res.status(400).json({message:"Invalid Credentials"})
      const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)
      res.status(200).json({user:existingUser,token:token})
    } catch (error) {
      console.log("error in SignIn",error.message)
      res.status(500).json({message:"Something went wrong in SignIn"})
  
    }
  }

module.exports = { signIn,signUp}
