import { CHANGE_PRICE, FILL_JOKES } from "../../types"
import axios from "axios"



export const addPrice = (num) => {

    console.log("action", num);

    return {
        type: CHANGE_PRICE,
        payload: num
    }
}



export const getJokes = (pageNum) => dispatch => {

    axios.get(`https://icanhazdadjoke.com/search?page=${pageNum}`, {
        headers: {
            "Accept": "application/json"
        }
    }).then(res => {
        console.log(res);
        dispatch({ type: FILL_JOKES, payload: res.data.results })
    }).catch(err=>{
        console.log(err.message);
    })

}