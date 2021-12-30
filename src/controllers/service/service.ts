import db from '../../models/index';
const {Users,Posts}= db;
var adduser = async (create:object)=>{
    try { 
   
    let data = await Users.create(create);
    return data;
} catch (err) {
    console.log(err, "err");
}
}
var findUser = async ()=>{
try{
 let data = await Users.findAll({});
 return data ;
} 
catch(err){
    return err;
}
// find all fetch the all record  
}
var deluser = async (id:number,res:any)=>{
  
    return res = await Users.destroy({
               where :{
                      id:id
                  }
                 })
}

var updateuser = async (name:string,email:Number,id:Number)=>{
try{
    return id = await Users.update({name:name,email:email},{
        where:{
            id:id
        }
})
} 
catch(err)
{
    console.log(err)
}
};

var onetone = async(getid:Number|string)=>{
    let data = await Users.findOne({
        where:{id:getid},
        attributes:['name','email'],
        include:[Posts],       
    })
 
     return data;    

}

var belongTo = async()=>{
    let data = await Posts.findAll({
        attributes:['title','content'],        
        include:[
            {
                model:Users,
                attributes:['name','email']
            }
        ]

    })
   return data
     
}


export default {adduser,findUser,deluser,updateuser,onetone,belongTo}
    