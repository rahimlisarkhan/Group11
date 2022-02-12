import axios from "axios"



export const getJokes  = async (loadPage = 1) =>{

    try{
        let res = await axios.get(`https://icanhazdadjoke.com/search?page=${loadPage}&limit=30`,{
            headers:{
                "Accept": "application/json"
            }
        })
        return res

    }catch(err){
        console.log(err.message);
    }

} 