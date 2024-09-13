const express=require("express");
const collection=require("./mongo")
const cors=require("cors");
const { Collection } = require("mongoose");
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get("/login",cors(),async(req,res)=>{

    try{

  
  const allData = await collection.find({});
            res.json(allData);
    }catch(e){
        console.log(e);
    }
     
})

app.post("/login",async(req,res)=>{
    const{email,password}=req.body


    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist");
        }else{
            res.json("notexist");
        }
    }catch(e){
        console.log(e);
    }
})



app.post("/register",async(req,res)=>{
    const{email,password}=req.body

    const body={
        email:email,
        password:password
    }

    try{
       
         const check=await collection.findOne({ email:email })

         if(check){
             res.json("exist");
         }else{
             res.json("notexist");
             await collection.insertMany([body])
         }
    }catch(e){
        console.log(e);
    }
})

app.listen(5000,()=>{
    console.log("Connected");
})