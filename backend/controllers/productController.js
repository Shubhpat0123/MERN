const Product = require("../models/productModel");


exports.createProduct = async (req, res, next) => {
    console.log("abc")
const product = await Product.create(req.body);
console.log("def")
res.status(201)
}

exports.getAllProducts = (req,res)=>{

    res.status(200).json({message:"route is working fine"})
    
}