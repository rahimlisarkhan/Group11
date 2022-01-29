import { useContext } from "react"
import { HomeContext } from "../../feature/Home"



export const Title = () => {

    const { count,sayHello,setCount } = useContext(HomeContext)

    const increment = () =>{
        setCount(prev=>prev+=1)
    }

    return (
        <>
        <h1>Title {count}</h1>
        <button onClick={increment}>artir</button>
        <button onClick={()=>sayHello("Salam")}>salamla</button>
        </>
    )
}