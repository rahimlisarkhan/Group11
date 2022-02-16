

const userAPI = (req,res) =>{

    if(req.method === "GET"){
        let data = db.on("user")
        return res.json({status:200,result:{full_name:"Murad Isgenderli"}})
    }

    if(req.method === "POST"){
        let {full_name,password} = req.body

        if(!full_name){
            return res.json({status:400,message:"Full name daxil olunmalidir"})
        }

        return res.json({status:201,messages:"User yaradildi"})
    }

}


export default userAPI

