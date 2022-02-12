import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { getJokes } from "../../services/About";
import { fillJokes } from "../../store/slices/about/aboutSlice";
import { incrementByAmount } from "../../store/slices/home/homeSlice";

export const Home = () => {


    let stateHome = useSelector(state =>state.home)
    let jokesData = useSelector(state =>state.about.jokes)
    let dispatch = useDispatch()



    const handleArtiran = () => {
        dispatch(incrementByAmount(30))
    }

    return(
        <>
        <h1>Home {stateHome.value}</h1>
        <button onClick={handleArtiran}>+</button>
        <ul>
            {jokesData?.map(item=><li key={`jokes-${item.id}`}>{item.joke}</li>)}
        </ul>
        </>
    )
}