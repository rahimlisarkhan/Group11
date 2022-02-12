import React from "react";


export class Card extends React.Component{

    constructor(props){
        super(props)

        this.state={
            result:"Oldu",
        }

        this.qullugundayam = this.qullugundayam.bind(this)
    }


    qullugundayam(){
        this.props.zibiliAt(this.state.result)
        // console.log("Ne is gorum ana");
    }   

    render(){
        return(
            <ul>
                <li>Username:{this.props.info?.username} </li>
                <li>Parol: {this.props.info?.password}</li>
                <li>
                    <button onClick={this.qullugundayam}>Atdim</button>
                </li>
            </ul>
        )
     }
}