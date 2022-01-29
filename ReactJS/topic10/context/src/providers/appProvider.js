


import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext()


export const AppProvider = ({ children }) => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        getMovie()
        console.log("yene isledi");
    }, [])

    const getMovie = (page=1) => {
        axios.get(`https://icanhazdadjoke.com/search?page=${page}&limit=10`, {
            headers: {
                "Accept": "application/json"
            }
        }).then(res => {
            setProducts(res.data.results)
        })
    }


    let value = {
        products,
        setProducts,
        getMovie
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}