import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getJokes } from "../../services/About"
import { fillJokes } from "../../store/slices/about/aboutSlice"

export const About = () => {

    let homeState = useSelector(state => state.home)
    let aboutState = useSelector(state => state.about)
    let dispatch = useDispatch()
    let [constPage,setCountPage] = useState(2)
    let [loading,setLoading] = useState(false)
    let jokesRef = useRef()

    // useEffect(() => {
    //     getJokes().then(({ data: { results } }) => {
    //         dispatch(fillJokes(results))
    //     })

    // }, [dispatch])


    useEffect(() =>{
 
        loadObserver.observe(jokesRef.current)
        
    },[] )


    const moreLoadingJokes = () => {
        setLoading(true)
        setCountPage(prev=>prev+=1)

        getJokes(constPage).then(({ data: { results } }) => {
            dispatch(fillJokes(results))
            setLoading(false)
        })
        console.log("gordu");
    }
    const loadObserver =  new IntersectionObserver(moreLoadingJokes, { rootMargin: "10px",});



    // const moreLoadingJokes = () => {
    //     setCountPage(prev=>prev+=1)

    //     getJokes(constPage).then(({ data: { results } }) => {
    //         dispatch(fillJokes(results))
    //     })

    // }

    console.log(aboutState);

    return (
        <>
        <h1>About{homeState.value}</h1>
        <ul>
            {aboutState.jokes?.map(item=><li key={`jokes-${item.id}`}>{item.joke}</li>)}
        </ul>
        <div ref={jokesRef} style={{backgroundColor:"red"}}> bunu goren kimi isle  </div>
        {/* <button onClick={moreLoadingJokes}>Daha coxunu gor</button> */}
        {loading && <h1>Loading</h1>}
        <button onClick={moreLoadingJokes}>Daha coxunu gor</button>
        </>
    )
}