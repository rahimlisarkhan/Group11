import { useContext, useEffect } from "react"
import { HomeContext } from "../../feature/Home"
import { AppContext } from "../../providers/appProvider"
import { Title } from "../Title"





export const Info = (props)=> {
    let store = useContext(AppContext)
    const { count} = useContext(HomeContext)
    
    console.log("infodaki",store);

    return(
        <>
        <h1>Info count {count}</h1>
        {store.products?.map(item=><p key={item.id}>{item.joke}</p>)}
        <Title num={props.num}/>
        </>
    )
}