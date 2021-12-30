import express,{Request,Response,NextFunction}from 'express'
//const express = require('express');
import userRoute from "./routes/userroute";
const app = express();
import db from "./models/index"
app.use(express.json())
app.use(express.urlencoded({
    // extended:true
})) 
app.use(userRoute);
const port =3000

app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.send("home page")
})
 db.sequelize.sync().then(()=>{
    console.log('yes resync');
})
app.listen(port,()=>{
    console.log(`app is listening at http:localhost:${port}`);
})
