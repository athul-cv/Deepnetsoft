const express =  require("express");
const mongoose =require("mongoose")


const bodyparser =require("body-parser")
const cors = require("cors")

const app = express();
const port = 5000;


app.use(express.json());
app.use(bodyparser.json());
app.use(cors())

app.listen(port, () => {
    try {
        console.log(`server is running ${port}`);
        mongoose.connect(
            "mongodb+srv://athulcv460:athulcv460@deepsoft.rvkxs.mongodb.net/db-deepsoft"
        );
        console.log("db connection established");
    } catch (err) {
        console.error(err);
    }
})

app.get("/", (req,res)=>{
    res.send({
        message:"hello"
    })
})

const Menuschemastructure = new mongoose.Schema(
    {
        menuname:{
            type:String,
            required:true,
            unique:true,
        },
        menudescription:{
            type:String,
            required:true,
        }

})
 const Menu =mongoose.model("menu",Menuschemastructure)


app.post("/Menu",async(req,res)=>{
    const {menuname,menudescription}= req.body;
   try {
           const newmenu =new Menu({menuname,menudescription})
           await newmenu.save();
           res.status(200).send({message:"menu items are inserted",menudetails:newmenu})
       } catch (error) {
           res.status(500).send({message:"error occured"})
           
       }
})

app.get("/menuget",async(req,res)=>{
    try{
        const Menuget = await Menu.find();
        if(Menuget.length==0){
            return res.status(404).send({message:"not found"})}
            else{
                res.status(200).send(Menuget)
            }
    }catch (error){
        console.error(error)
        res.status(500).send({message:"internal server error"})

    }
})



const Foodschemastructure = new mongoose.Schema(
    {
        menuid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"menu"
        },
        foodname:{
            type:String,
            required:true,
            unique:true,
        },
        fooddescription:{
            type:String,
            required:true,
        },
        foodprice:{
            type:String,
            required:true,
        }
    

})
 const Food=mongoose.model("food",Foodschemastructure)

app.post("/Food",async(req,res)=>{
    const {menuid,foodname,fooddescription,foodprice}= req.body;
   try {
           const newfood =new Food({menuid,foodname,fooddescription,foodprice})
           await newfood.save();
           res.status(200).send({message:"food items are inserted",menudetails:newfood})
       } catch (error) {
           res.status(500).send({message:"error occured"})
           
       }
})

app.get("/foodget",async(req,res)=>{
    try{
        const foodget = await Food.find();
        if(foodget.length==0){
            return res.status(404).send({message:"not found"})}
            else{
                res.status(200).send(foodget)
            }
    }catch (error){
        console.error(error)
        res.status(500).send({message:"internal server error"})

    }
})

module.exports = app;
