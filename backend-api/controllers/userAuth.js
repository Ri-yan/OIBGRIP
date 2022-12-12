const userSchema = require('../Schemas/user')
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
const SECRET_KEY=`${process.env.SECRET_KEY}`;
const signUp = async(req,res) => {
  const {username,email,password} =req.body;
  try {
    const ifExist = await userSchema.findOne({email : email})
    if(ifExist) return res.status(400).json({message:"user already exist"})
    const hashPassword = await bcrypt.hash(password,10)
    const result = await userSchema.create({
        email:email,
        password:hashPassword,
        username:username
    })
    const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)
    res.status(201).json({user:result,token:token})
  } catch (error) {
    console.log("error in SignUP",error.message)
    res.status(500).json({message:"Something went wrong in SignUP"})

  }
}
const signIn = async(req,res) => {
    const {email,password} =req.body;
    try {
      const existingUser = await userSchema.findOne({email : email})
      if(!existingUser) return res.status(404).json({message:"User not found"})
      const matchPassword =await bcrypt.compare(password,existingUser.password)
      if(!matchPassword) return res.status(400).json({message:"Invalid Credentials"})
      const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)
      res.status(200).json({user:existingUser,token:token})
    } catch (error) {
      console.log("error in SignIn",error.message)
      return res.status(500).json({message:"Something went wrong in SignIn"})
  
    }
  }

module.exports = { signIn,signUp}
