import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { incrementByAmount } from "../../store/slices/home/homeSlice";
import ProductCard from "../../feature/home/components/Card"
import { useEffect } from "react"
import { getProducts } from "../../services/Home";
import { useState } from "react"

export const Home = () => {
    let [productState, setProductsState] = useState(null)

    let stateHome = useSelector(state => state.home)
    let jokesData = useSelector(state => state.about.jokes)
    let dispatch = useDispatch()


    useEffect(() => {
        (
            async () => {
                let { data: { products } } = await getProducts()
                setProductsState(products)
            }
        )()
    }, [])

    console.log(productState);

    const handleArtiran = () => {
        dispatch(incrementByAmount(30))
    }

    if (!productState) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Home {stateHome.value}</h1>
            <Box style={{display:"flex",flexWrap:"wrap"}}>
                {productState.map(product => <ProductCard key={`product-id-${product.id}`} {...product} />)}
            </Box>
            <button onClick={handleArtiran}>+</button>
            <ul>
                {jokesData?.map(item => <li key={`jokes-${item.id}`}>{item.joke}</li>)}
            </ul>
        </>
    )
}