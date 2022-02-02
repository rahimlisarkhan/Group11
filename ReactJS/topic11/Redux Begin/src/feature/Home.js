import {createContext, useState } from "react";
import { connect } from "react-redux";
import { addPrice } from "../store/actions/homeAction";
import { getJokes } from "../store/actions/productAction";
import axios from "axios"

export const HomeContext = createContext()

 function Home(props) {

    console.log(props);

    // let  [count,setCount] = useState(0)

    const handleClick = () => {
        props.dispatch(addPrice(10))
        
        console.log();
    }

    const jokesGetir = () => {
        axios.get("https://icanhazdadjoke.com/search?page=1",{
            headers:{
                "Accept": "application/json"
            }
        }).then(res=>{
                props.dispatch(getJokes(res.data.results))
        })
    }

    return (
        <>
            <h1>Home Page ${props.state.price} </h1>
            <button onClick={handleClick}>ARTIR</button>
            <button onClick={jokesGetir}>GETIR</button>
        </>

    )
}

let a = state => {
    return {state:state}
}

// function a (state){
//     return state
// }


export default connect(a)(Home)
