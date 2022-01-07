import { Component } from "react";
import { Card } from "react-bootstrap";



export class DiceBox extends Component {

    render() {
        const {image} = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={image} />
            </Card>
        )
    }
} 