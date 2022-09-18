import qDB from '../../../DB/connection.js'

export const getAllUsers=(req,res)=>{
    qDB.execute(`select * from users`,(err,result)=>{
        if(err){
            res.json({message:'SQL Error',err})
        }
        else{
            res.json({message:"Done",result})
        }
    })
}


export const addUser =(req,res)=>{
    let {name,email,password,age,address} =req.body;
    qDB.execute(`INSERT INTO users (name,email,password,age,address) VALUES 
    ('${name}','${email}',${password},${age},'${address}')`,(err,result)=>{
       console.log(err); 
       if(err){
            res.json({message:'SQL Error',err})
        }
        else{
            res.json({message:"Done",result})
        }
    })
}


export const updateUser=(req,res)=>{
    let{id}=req.params;
    let{name,email}=req.body;
    qDB.execute(`UPDATE users SET name='${name}',email='${email}' WHERE id=${id}`,(err,result)=>{
        if(err){
            res.json({message:'SQL Error',err})
        }
        else{
            if(result.affectedRows){
                res.json({message:'Done',result})
            }
            else{
                res.json({message:'Invalid Id',result})
            }
        }
    })
}



export const signIn=(req,res)=>{
let{email,password}=req.body;
qDB.execute(`select * from users where email='${email}' and password=${password}`,(err,result)=>{
    
    if(err){
        res.json({mesaage:"SQL Error",err})
    }
    else{
        if(result.length){
            res.json({message:"Done",result});
        }
        else{
            res.json({message:"email or password",result})
        }
    }
})
}