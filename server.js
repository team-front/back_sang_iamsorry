const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const session = require('express-session');
const {check, validationResult} = require('express-validator');


// 몽구스 연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jieun:ashley824@cluster0.w7omc7d.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err)
)

app.get('/',(req, res) => {
    res.send('관리자 페이지 연결')
})

//bodyParser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

//express-messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//라우팅
const admin = require('./routes/admin_products.js')

app.use('/admin/products',adminProducts);

app.listen(3005);