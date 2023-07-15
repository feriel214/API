const express = require('express')
const router = express.Router()
const Product = require('../models/product')


//get products 
router.get('/', async (req, res) => {
    try {
      const products = await Product.find()
      res.json(products)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })



  //Ajout du produit 
  //handle error
  router.post("/ajouter",async (req,res)=>{
    const product=new Product({
        name:req.body.name,
        id:req.body.id, //required
        descreption:req.body.descreption,
        price:req.body.price
        })
        try{
           const newProduct=await product.save();
           res.status(201).json(newProduct);
        }catch(err){
        res.status(400).json({message:err})
        }
        }
  
  )
  













module.exports = router