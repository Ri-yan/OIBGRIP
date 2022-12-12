const PizzaSchema = require('../Schemas/pizza')

const addMenuItem = async(req,res)=>{
    const {name,preview,type,description,price} = req.body;
    const newOrder= new PizzaSchema({
        id:id,
      name:name,
      preview:preview,
      type:type,
      description:description,
      price:price
    })
  try {
    await newOrder.save();
    res.status(201).json(newOrder)
  } catch (error) {
    console.log("error in addtoMemnu",error.message)
    res.status(500).json({message:"Something went wrong in Menu"})

  }
}
const getMenu = async(req,res) => {
    try {
        const pizzas = await PizzaSchema.find({});
        return res.json(pizzas)
    
      } catch (error) {
        console.log("error in getMenu",error.message)
        return res.status(500).json({message:"Something went wrong in getting Menu"})
    
      }
  }

  module.exports = { getMenu ,addMenuItem}

