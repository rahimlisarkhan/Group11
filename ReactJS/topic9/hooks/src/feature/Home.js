import {useEffect, useReducer, useState } from "react";
import { Info } from "../components/Info";
import { homeReducer, initialHomeState } from "../store/reducers/home";



export default function Home() {

    // const [todos, dispatch] = useReducer(reducer, initialTodos);

    let  [count,setCount] = useState(0)

    const [homeState,homeDispatch] = useReducer(homeReducer,initialHomeState)

    useEffect(()=>{
        getMovie()
    },[])

    console.log(homeState);

    const increment = () =>{
        setCount(prev=>prev+=1)
        homeDispatch({type:"ARTIR",payload:count})
    }

    const decrement = () =>{
        setCount(prev=>prev-=1)
        homeDispatch({type:"AZALT",payload:count})
    }

    const getMovie = () =>{

        // homeDispatch({type:"GETPRODUCTS",payload:res.data.result})
    }
    return (
        <>
            <h1>Home Page {homeState.count} </h1>
            <button onClick={increment}>Artir</button>
            <button onClick={decrement}>Azalt</button>

            <Info/>
        </>
    )
}