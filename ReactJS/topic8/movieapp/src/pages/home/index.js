import { Component } from "react";
import { Auth } from "../../components/HOC/auth";
import { HomeContainer } from "../../feature/Home/HomeContainer";

export class Home extends Component{

    render(){
        return(
            <HomeContainer/>
        )
    }
}

export default Auth(Home)