import { Component } from "react";
import { Basket } from "../Basket";


export class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            full_name:"Marry"
        }

        this.userChange = this.userChange.bind(this)
    }

    userChange(){
        this.setState({full_name:"John Doe"})
    }

    render() {

        let {basket} = this.props

        return(
            <>
            <h1>Header | User {this.state.full_name}</h1>
            <button onClick={this.userChange}>header button</button>
            <Basket yuxaridanGelenBasket={basket}/>
            </>

        )   
    }
} 