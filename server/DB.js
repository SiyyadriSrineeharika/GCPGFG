const express = require('express');
const mongoose = require('mongoose')
const bcrpyt = require('bcryptjs');
const User = require('./models/usermodel');
const foodlog = require('./models/foodlog')
const calorielog = require('./models/calorielog')
const jwt = require('jsonwebtoken');
const app = express();
const middleware = require('./middleware')
const cors = require('cors')


mongoose.connect("mongodb+srv://root:root@cluster0.37xkg4e.mongodb.net/GFGHackathon?retryWrites=true&w=majority").then(()=>console.log("DB connected"))
app.listen(5000,()=>{
    console.log('Server running...')
})
app.use(express.json())
app.use(cors({origin:"*"}))
//Registration
app.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        let exist = await User.findOne({email})
        if(exist){
            return res.status(400).send("Already registered");
        }
        const hashedPassword= bcrpyt.hashSync(password);
        let newUser = new User({
            name,
            email,
            password:hashedPassword,
            foodlogs:[],
            calorielogs:[],
        })

        await newUser.save();
        res.status(200).json(newUser);

    }
    catch(err){
        console.log(err);
        return res.status(400).send("failed")
    }
})
//login
app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        let exist = await User.findOne({email});
        if(!exist){
            return res.status(400).send("user not found");
        }
        const isPasswordCorrect= await bcrpyt.compareSync(password,exist.password);
        if(!isPasswordCorrect){
            return res.status(400).send("Bad credentials");
        }
        let payload={
            user:{
                id: exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},(err,token)=>{
            if(err) throw err
            return res.json({token,user:exist})
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).send("login fialed")
    }
})
//myprofile
app.get('/myprofile',middleware,async(req,res)=>{
    try{
        let exist = await User.findById(req.user.id)
        if(!exist){
            return res.status(400).send("User not found");
        }
        res.status(200).json(exist)
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Server Error")
    }
})

//foodlogs
app.post('/foodlogs',async(req,res)=>{
    try{
        const {qty,Unit,food,Calories,date,user}=req.body
        let exist = await User.findById(user)
        if(!exist){
            return res.status(400).send("no user found");
        }

        const foodlogs=new foodlog({
                qty,
                Unit,
                food,
                Calories,
                date,
                user
        });
        const session=await mongoose.startSession();
        session.startTransaction();
        await foodlogs.save({session})
        exist.foodlogs.push(foodlogs);
        await exist.save({session})
        await session.commitTransaction();
        return res.status(200).json({foodlogs});
    }
    catch(err){
        console.log(err);
        return res.status(500).json("failed")
    }

})

//myfoodlogs
app.get('/myfoodlogs',middleware,async(req,res)=>{
    let foodlogs;
    const id=req.user.id;
    try{
       foodlogs=await User.findById(id).populate("foodlogs")
        return res.status(200).json({user:foodlogs});
    }
    catch(err){
        console.log(err);
        return res.status(500).send("no logs found")
    }
})

//calorielogs
app.post('/Calorielogs',async(req,res)=>{
    try{
        const {activity,duration,weight,burnedcal,date,user}=req.body
        let exist = await User.findById(user)
        if(!exist){
            return res.status(400).send("no user found");
        }

        const Calorielogs=new calorielog({
                activity,
                duration,
                weight,
                date,
                burnedcal,
                user,
        });
        const session=await mongoose.startSession();
        session.startTransaction();
        await Calorielogs.save({session})
        exist.calorielogs.push(Calorielogs);
        await exist.save({session})
        await session.commitTransaction();
        return res.status(200).json({Calorielogs,name:exist.name});
    }
    catch(err){
        console.log(err);
        return res.status(500).json("failed")
    }

})


app.get('/mycalorielogs',middleware,async(req,res)=>{
    let calorielogs;
    const id=req.user.id;
    try{
       calorielogs=await User.findById(id).populate("calorielogs")
        return res.status(200).send({user:calorielogs});
    }
    catch(err){
        console.log(err);
        return res.status(500).send("no logs found")
    }
})


app.delete('/deletefoodlog/:id',async(req,res)=>{
    const id = req.params.id;
    let foodlogs;
    try{
        foodlogs=await foodlog.findByIdAndRemove(id).populate('user');
        await foodlogs.user.foodlogs.pull(foodlogs)
        await foodlogs.user.save();
    }catch(err){
        console.log(err);
    }
    if(!foodlogs){
        return res.status(400).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Deleted"});
})


app.delete('/deletecalorielog/:id',async(req,res)=>{
    const id = req.params.id;
    let calorielogs;
    try{
        calorielogs=await calorielog.findByIdAndRemove(id).populate('user');
        await calorielogs.user.calorielogs.pull(calorielogs)
        await calorielogs.user.save();
    }catch(err){
        console.log(err);
    }
    if(!calorielogs){
        return res.status(400).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Deleted"});
})







