import { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { getJokes } from "../store/actions/home"



const Home = ({ state,getMurad}) => {

    let stateDAtaHome = useSelector(state=>state.home)
    console.log("useSelector ile goturme connectsiz",stateDAtaHome);


    useEffect(() =>{
        !state.jokes.length && getMurad(3)

    },[getMurad,state.jokes])

    return (
        <>
        {/* <h1>Home PAge {state.price}</h1> */}
        <ul>
            {state.jokes.map( item => <li key={item.id}>{item.joke}</li>)}
        </ul>
        </>
    )
}



const mapStateToProps = (state) => {
    return {
        state: {
            price: state.about.price,
            jokes: state.home.jokes,
        }
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getMurad: (num) => dispatch( getJokes(num))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)