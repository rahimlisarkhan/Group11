import {useEffect, useRef, useState } from "react";
import axios from "axios"


export default function About(props) {

    let textInput = useRef();

    let [count, setCount] = useState(0)
    let [changeColor, setChangeColor] = useState(false)
    let [products, setProducts] = useState([])
 
    useEffect(() => { //ComponentDidMount
        console.log("Sorgu atildi data geldi");
        getMovie()

        return () => { //ComponentWillUnMount
            console.log("About Sehifesinden cixis olundu");
            // formReset()
        }
        
    }, [])

    useEffect(() => { //ComponentDidUpdate
        console.log("Count update olundu");
        // getCount()
    }, [count])


    const getMovie = () => {
        axios.get("https://icanhazdadjoke.com/search?page=1&limit=10", {
            headers: {
                "Accept": "application/json"
            }
        }).then(res => {
            console.log(res)
            setProducts(res.data.results)
        })
    }

    const increment = () => {
        setCount((prev) => prev += 1)
        // setCount(5)
        console.log(textInput.current.value);
    }

    const handleChangeText = (e) =>{
        console.log(e.target.value);
    }


  
    return (
        <>
            <input ref={textInput} onChange={handleChangeText} />
            <h1 style={{ color: changeColor ? "red" : "black" }}>About function page {count}</h1>
            <button onClick={increment}>Artirir</button>
            <button onClick={() => setChangeColor((prev) => !prev)}>Change color</button>
            <ul>
                {products?.map(item => <li key={item.id}>{item.joke}</li>)}
            </ul>
        </>
    )

}
