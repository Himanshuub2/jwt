import express from "express";
import jwt from "jsonwebtoken";


const port = 5005;
const app = express();
app.use(express.json())
app.listen(port);

app.post("/login",(req,res)=>{
    const {user} = req.body;

    if(!user){
        return res.status(404).json({message:"no user found"})
    }

    let accessToken = jwt.sign(user,"access",{expiresIn:"20s"}); 
    let refreshToken = jwt.sign(user,"refresh" ,{expiresIn:"7d"});

    return res.status(201).json({
        accessToken,refreshToken
    })
})
