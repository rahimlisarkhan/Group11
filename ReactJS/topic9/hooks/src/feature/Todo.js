

import { useCallback, useMemo, useState } from "react"
import { timeConvert } from "../helper/time-convert"


export default function Todo(props) {

    let [localTime,setLocatime] = useState(1600)
    let [count,setCount] = useState(0)
    let [sayHello,setSayHello] = useState("Hola")
    let [numbers,setNumber] = useState([12,5])

    let time = useMemo(()=>timeConvert(localTime),[localTime])
    // let time = timeConvert(localTime)

    console.log(time);

    const salamlama = () => {
        setSayHello("Salam Ejdaha")
    }

    let increment = (a)=>{
        console.log(a);
        setCount(prev=>prev+=1)
    }


    const addItem = useCallback((a) => {
        setNumber([...numbers, count])
    },[numbers,count])


    // let test = useCallback(addItem,[count,numbers])
 
    return (
        <>  
            <h1>{sayHello}</h1>
            <h1>Todo Page {count}</h1>
            <h1>Time : {time}</h1>
            <button onClick={salamlama}>salamla</button>
            <button onClick={increment}>Artir</button>
            <button onClick={addItem}>Gosder</button>
            <ul>
                {numbers.map((num,index) => <li key={`number-id-${index}`}>{num}</li> )}
            </ul>
        </>
    )

}
