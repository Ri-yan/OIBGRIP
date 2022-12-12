const MaterialsSchema = require('../Schemas/materials')

const addMaterial = async(req,res)=>{
    const {name,type,avail,price} = req.body;
    const newMaterial= new MaterialsSchema({
        id:id,
        name:name,
        type:type,
        avail:avail,
        price:price
    })
  try {
    await newMaterial.save();
    res.status(201).json(newMaterial)
  } catch (error) {
    console.log("error in addtoMemnu",error.message)
    res.status(500).json({message:"Something went wrong in Menu"})

  }
}
const getMaterial = async(req,res) => {
    try {
        const materials = await MaterialsSchema.find({});
        return res.json(materials)
    
      } catch (error) {
        console.log("error in getMenu",error.message)
        return res.status(500).json({message:"Something went wrong in getting Menu"})
    
      }
  }
const updateStatus=async(req,res)=>{
  const id = req.params.id;
  const {avail}= req.body;
  const updatedStatus = {
    avail:avail,
    // userId:req.userId
  }
  try {
    await MaterialsSchema.findByIdAndUpdate(id,updatedStatus,{new:true});
    res.status(200).json(updatedStatus)

  } catch (error) {
    console.log("error in updateCartItem",error.message)
    res.status(500).json({message:"Something went wrong in updateCartItem"})

  }
}
  module.exports = {  getMaterial ,addMaterial,updateStatus}

