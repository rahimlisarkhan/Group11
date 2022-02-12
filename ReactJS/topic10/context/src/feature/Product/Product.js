import { Container, Typography, Box, Pagination, Button } from "@mui/material"
import { useEffect, useReducer } from "react"
import axios from "axios"
import {myMuradReducer,initialState} from "../../reducers/productReducer"

export default function Product(props) {

    let [myState, dispatch] = useReducer(myMuradReducer, initialState)

    console.log(myState);

    useEffect(()=>{
        getJokes()
    },[])


    const getJokes = async () =>{

        
        dispatch({
            type: "LOADING",
            payload: true
        })

        try{
            let res = await axios.get("https://icanhazdadjoke.com/search?page=1",{ 
                headers:{
                    "Accept":"application/json"
                }
            })

            
        dispatch({
            type: "LOADING",
            payload: false
        })
            dispatch({type:"GETJOKES",payload:res.data.results})

        }catch(err){
            console.log(err.message);
            dispatch({
                type: "LOADING",
                payload: false
            })
        }
      

    }


    const handleClick = () => {

        dispatch({
            type: "ARTIR",
            payload: 10
        })

        dispatch({
            type: "LOADING",
            payload: true
        })

    }

    if(myState.isLoading){
        return <h1>Loading....</h1>
    }

    return (
        <Container>
            <Typography variant="h4">
                Product Page
            </Typography>
            <Box>
                <Button variant="contained" color="error" size="large" onClick={handleClick}> ACTION</Button>
            </Box>
        </Container>
    )
}