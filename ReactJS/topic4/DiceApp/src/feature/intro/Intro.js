import { Component, Fragment } from "react";
import { FormContent } from "../../components/form/Form";

export class Intro extends Component {

    render(){
       const {startGame} = this.props
        return(
            <Fragment>
                <h1>Welcome Dice Game</h1>
                <FormContent startGame={startGame}/>

            </Fragment>

        )
    }
}