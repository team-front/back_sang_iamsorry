let express = require('express')
let router = express.Router();

//Get add products 서버에 데이터 추가(상품이름, 주문날짜, 배송지)
router.get('/add-product',(req,res)=>{
    let title="";
    let date="";
    let address="";

    res.render('admin/add_product',{
        title:title,
        date:date,
        address:address
    });
});

//Post edit product 관리자 특정id 상품 수정 요청 경로
router.post('/edit-product/:id',async(req,res)=>{
    await checkPrime('title','title must have a vaule').notEmpty().run(req);

    let title = req.body.title;
    let date = req.body.date;
    let address = req.body.address;
    let id = req.params.id;
})

module.exports=router;