const CartSchema = require('../Schemas/cart')


const showCart = async(req,res) => {
  try {
    const orders = await CartSchema.find({userId:req.userId})
    res.status(201).json(orders)

  } catch (error) {
    console.log("error in showCart",error.message)
    res.status(500).json({message:"Something went wrong in showCart"})

  }
}
const addToCart = async(req,res) => {
const {name, quantity} = req.body;
    const newOrder= new CartSchema({
      name:name,
      quantity:quantity,
      status:'ordered',
      userId:req.userId
    })
  try {
    await newOrder.save();
    res.status(201).json(newOrder)
  } catch (error) {
    console.log("error in addToCart",error.message)
    res.status(500).json({message:"Something went wrong in addToCart"})

  }
}
const removeCartItem = async(req,res) => {
  const id = req.params.id;
  try {
    const order = await CartSchema.findByIdAndRemove(id)
    res.status(202).json(order)

  } catch (error) {
    console.log("error in removeCartItem",error.message)
    res.status(500).json({message:"Something went wrong in removeCartItem"})

  }
}
const updateCartItem = async(req,res) => {
  const id = req.params.id;
  const {name,status}= req.body;
  const updatedOrder = {
    name:name,
    status:status,
    userId:req.userId
  }
  try {
    await CartSchema.findByIdAndUpdate(id,updatedOrder,{new:true});
    res.status(200).json(updatedOrder)

  } catch (error) {
    console.log("error in updateCartItem",error.message)
    res.status(500).json({message:"Something went wrong in updateCartItem"})

  }
}


module.exports = { showCart,addToCart,removeCartItem,updateCartItem }
