import { Grid } from "@mui/material"
import React from "react"
import HomeCard from "../components/Card"


export class HomeContainer extends React.Component {

    render(){
        return(
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
                <Grid item md={3}>
                    <HomeCard/>
                </Grid>
            </Grid>
        )
    }
}
