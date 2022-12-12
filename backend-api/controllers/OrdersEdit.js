const OrderSchems = require('../Schemas/orders')

const addOrder = async(req,res)=>{
    const {orderer_id,reciever_name,ordername,address,
        preview,size,quantity,status,price,veggis,base,cheese,sause} = req.body;
    const newOrder= new OrderSchems({
        orderer_id:orderer_id,
        reciever_name :reciever_name,
        address :address,
        ordername :ordername,
        preview :preview,
        size :size ,
        quantity :quantity,
        status :status,
        price :price,
        veggis:veggis,
        base: base,
        cheese: cheese,
        sause: sause
    })
  try {
    await newOrder.save();
    res.status(201).json({message:"order placed"})
  } catch (error) {
    console.log("error in addOrder",error.message)
    res.status(500).json({message:"Something went wrong in Orders"})

  }
}
const getOrders = async(req,res) => {
    try {
        const{orderer_id}=req.body;
        const orders = await OrderSchems.find({orderer_id:"63930038423aaaf2a3d6df1d"});
        return res.json(orders)
    
      } catch (error) {
        console.log("error in getOrders",error.message)
        return res.status(500).json({message:"Something went wrong in getting Orders"})
    
      }
  }
  const getIOrders = async(req,res) => {
    try {
        const id = req.params.id;
        const orders = await OrderSchems.find({orderer_id:id});
        return res.json(orders)
    
      } catch (error) {
        console.log("error in getOrders",error.message)
        return res.status(500).json({message:"Something went wrong in getting Orders"})
    
      }
  }
  const getAllOrders = async(req,res) => {
    try {
        const{orderer_id}=req.body;
        console.log(orderer_id)
        const orders = await OrderSchems.find({});
        return res.json(orders)
    
      } catch (error) {
        console.log("error in getOrders",error.message)
        return res.status(500).json({message:"Something went wrong in getting Orders"})
    
      }
  }
const updateOrderStatus=async(req,res)=>{
  const id = req.params.id;
  const {status}= req.body;
  const updatedStatus = {
    status:status,
    // userId:req.userId
  }
  try {
    await OrderSchems.findByIdAndUpdate(id,updatedStatus,{new:true});
    res.status(200).json(updatedStatus)

  } catch (error) {
    console.log("error in updateCartItem",error.message)
    res.status(500).json({message:"Something went wrong in updateCartItem"})

  }
}
  module.exports = { getOrders,addOrder,getAllOrders ,updateOrderStatus,getIOrders}

