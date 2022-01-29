import {createContext, useState } from "react";
import { Info } from "../components/Info";

export const HomeContext = createContext()

export default function Home() {

    // const [todos, dispatch] = useReducer(reducer, initialTodos);

    let  [count,setCount] = useState(0)
    let  [movies,setMovies] = useState(0)
    let  [modal,setMoadl] = useState(false)

    const sayHello = (text)=>{
        console.log(text);
        setMoadl(prev=>!prev)
    }

    const getMovie = () => {
        setMovies([])
    }

    return (
        <HomeContext.Provider value={{movies,count,setCount,sayHello,getMovie}}>
           {modal && <h1>Modal Acildi</h1> }
            <h1>Home Page </h1>
            <Info/>
        </HomeContext.Provider>

    )
}