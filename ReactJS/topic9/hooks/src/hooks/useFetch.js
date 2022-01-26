import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url, config) => {
    let [data, setData] = useState(null)
    let [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url, config).then(res => {
            // console.log(res);
            setData(res.data.results)
        }).catch((error) => {
            setError(error.message)
        })

    }, [url])

    return [data, error]
}