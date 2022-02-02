import { useRef, useState } from "react"
import { connect } from "react-redux";
import { addPrice } from "../store/actions/home";



const About = (props) => {

    let priceRef = useRef()
    // let [count,setCount] = useState(0)


    console.log(props);

    const handlePrice = () => {
        let priceValue = priceRef.current.value
        // setCount(prev=>prev +=1)
        // props.qiymetiDeyisen(+priceValue)
        props.qiymetiDeyisen(priceValue)
        // console.log()
        // props.dispatch(addPrice(+priceValue))

        // setTimeout(() => {
        //     alert("Change price!")
        //     priceRef.current.value = ""
        // }, 1000)
    }

    return (
        <>
            <h1>About PAge</h1>
            <br />
            <input ref={priceRef} type="number" />
            <br />
            <button onClick={handlePrice}>Add</button>
        </>

    )
}


const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => {
    return {
        qiymetiDeyisen: (num) => dispatch(addPrice(num)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(About)