import { Component } from "react";



export class Content extends Component {

    constructor(props){
        super(props)
    }

    render() {

        let { count } = this.props

        return(
            <div>
                <h1>Count</h1>
                <h2>{count}</h2>
            </div>
        )
    }
}