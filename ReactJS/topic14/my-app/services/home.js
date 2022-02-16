import axios from "axios"


export const getJokes = async () => {
    let res = await axios.get("http://www.omdbapi.com/?s=movie&apikey=a407a7b3")


    return res

}


export const getMovieSlug = async (title) => {
    let res = axios.get(`http://www.omdbapi.com/?t=${title}&apikey=a407a7b3`)
    return res
}

export const getProfile = async (...args) =>{
    let res = await axios(...args)
    return res.data
}