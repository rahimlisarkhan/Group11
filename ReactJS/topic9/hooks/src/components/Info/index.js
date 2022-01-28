import { useEffect, useReducer } from "react"
import { homeReducer, initialHomeState } from "../../store/reducers/home"





export const Info = ()=> {
    const [homeState,homeDispatch] = useReducer(homeReducer,initialHomeState)
    
    console.log(homeState);

    useEffect(()=>{
        console.log("yenilendi");
    }
    ,[homeState])

    return(
        <h1>Info count {homeState.count}</h1>
    )
}