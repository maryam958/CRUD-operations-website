import qDB from '../../../DB/connection.js'


export const getProduct=(req,res)=>{
    qDB.execute(`select * from users inner join products  on products.userId=users.id `,(err,result)=>{
        if(err){
            res.json({message:"SQL Error",err});
        }
        else{
            res.json({message:"Done",result}); 
        }
    })
}


export const getById=(req,res)=>{
    let{id}=req.params;
    qDB.execute(`select * from products where id=${id}`,(err,result)=>{
        if(err){
            res.json({message:"SQL Error",err})
        }
        else{
            if(result.length){
                res.json({message:"Done",result}) 
            }
            else{
                res.json({message:"Invalid product id",result}) 
            }
        }
    })
}




















export const addProduct=(req,res)=>{
    let{name,price,description,userId}=req.body;
    // console.log(name,description,price,userId);
    qDB.execute(`INSERT INTO products(name,description,price,userId) VALUES ('${name}','${description}',${price},${userId})`,(err,result)=>{
        if(err){
            res.json({message:"SQL Error",err});
        }
        else{
            res.json({message:"Done",result}); 
        }
    })
}


export const deleteProduct=(req,res)=>{
    let{id}=req.params;
    qDB.execute(`delete from products where id=${id}`,(err,result)=>{
        if(err){
            res.json({message:"SQL Error",err});
        }
        else{
            if(result.affectedRows){
                res.json({message:"Done",result}); 
            }
            else{
                res.json({message:"Invalid id",result}); 
            }
           
        }
    })
}

export const updateProduct=(req,res)=>{
    let{id}=req.params;
    let{name,price,description,userId}=req.body;
    qDB.execute(`UPDATE products SET name='${name}',price=${price},description='${description}' ,userId=${userId} WHERE id=${id}`,(err,result)=>{
        if(err){
            res.json({message:"SQL Error",err});
        }
        else{
            if(result.affectedRows){

                
                res.json({message:"Done",result}); 
            }
            else{
                res.json({message:"Invalid id",result}); 
            }
           
        }
    })
}
  