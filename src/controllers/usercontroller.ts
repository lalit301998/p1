import UserService from '../controllers/service/service'
import {Request,Response} from "express";
let addUser = async (req:Request,res:Response)=>{
    try{
        
     console.log(req.body);
     let create = {name:req.body.name,email:req.body.email};
     let result1 =  await UserService.adduser(create);
     res.status(200).json(result1); 
    } 
    catch(err){
        console.log(err);
        res.send({messgae:err})
    }
 }
 
 let updateUser = async (req:Request,res:Response)=>{
    console.log("body",req.body);
    //const name = req.body.name
    //const email = req.body.email
    //const id = req.body.id
    const  {name, email, id} = req.body;  
  const result1 = await UserService.updateuser(name,email,id)
  console.log(result1)
    res.status(200).json(result1)
    
 }   

let delUser = async (req:Request,res:Response)=>{
    let result2 = UserService.deluser(req.body.id,res)
    res.status(200).json({messge:"deleted successfully"});  
}



var findUser = async (req:Request,res:Response)=>{
  let result =  await UserService.findUser(); 
  res.status(200).json(result);     
}

var onetone = async(req:any,resp:Response)=>{

   
  let result =  await UserService.onetone(req.query.id); 
  resp.status(200).json(result);  

}

 var belongTo = async(req:Request,resp:Response)=>{

     let result =  await UserService.belongTo(); 
     resp.status(200).json(result);  
  
   }
module.exports ={
    addUser,updateUser,delUser,findUser,onetone,belongTo
}