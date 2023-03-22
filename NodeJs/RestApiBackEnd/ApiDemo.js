const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./model/Product');

mongoose.connect('mongodb+srv://RidhamRupavatiya:Ridham07@cluster0.c7nwigx.mongodb.net/colleges?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected with mongo atlas colud server..");
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/products',async(req,res)=>{
        const data = await Product.find();
        res.send(data);
    });

    app.get('/product/:id',async(req,res)=>{
        const data = await Product.findOne({PId:req.params.id});
        res.send(data);
    });

    app.post('/product',async(req,res)=>{
        const pro = new Product();
        pro.PId = req.body.PId;
        pro.PName = req.body.PName;
        pro.PImage = req.body.PImage;
        pro.Price = req.body.Price;
        const data = await pro.save();
        res.send(data); 
    });

    app.put('/product/:id',async(req,res)=>{
        const data = await Product.findOne({PId:req.params.id});
        data.PName = req.body.PName;
        data.PImage = req.body.PImage;
        data.Price = req.body.Price;
        await data.save();
        res.send(data);
    });

    app.delete('/product/:id',async(req,res)=>{
        const data = await Product.deleteOne({PId:req.params.id});
        res.send(data);
    });

    app.listen(3003,()=>{
        console.log("Server Started at @ 3003...");
    });
})