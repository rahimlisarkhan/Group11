import { Component } from "react";




export class Basket extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let { yuxaridanGelenBasket } =this.props
        return(
          <h1>basket:{yuxaridanGelenBasket}</h1>  
        )
    }
}