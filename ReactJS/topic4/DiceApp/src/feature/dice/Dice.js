import { Component } from "react";
import { Card,Button } from "react-bootstrap";
import { DiceBox } from "../../components/dicebox/DiceBox";

export class Dice extends Component {

    constructor(props){

        super(props);
    }
    render(){
    const { player, randomDice ,image,point} = this.props

        return(
            <Card className="text-center text-dark">
                <Card.Header>Dice APP</Card.Header>
                <Card.Body>
                    <Card.Title >{player}</Card.Title>
                    <Card.Title >Point {point}</Card.Title>
                </Card.Body>

                <DiceBox image={image}/>

                <Button onClick={randomDice} variant="success">Rolling</Button>
            </Card>
        )
    }
}