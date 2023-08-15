let express = require('express');
let router = express.Router();
const {check, validationResult} = require('express-validator');

//관리자가 db 저장된 데이터 볼 수 잇는
//Get product model
let Product = require('../models/productSchema');

router.get('/',(req,res)=>{
    Product.find({}).sort({sorting:1}).exec((err,products)=>{
        res.render('admin/products',{
            products : products
        })
    })
});

//Exports
module.exports = router;