import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap"


export class JokesCard extends React.Component {


    constructor(props){
        super(props)

        this.state = {
            vote:0
        }

        this.incrementVote = this.incrementVote.bind(this)
        this.decrementVote = this.decrementVote.bind(this)
    }

    
    
    incrementVote(){
        this.setState(prevState=>{
            return {
                vote: prevState.vote + 1
            }   
        })
        this.props.onVoted(this.props.sira,this.state.vote)
    }

    decrementVote(){
        this.setState(prevState=>{
            return {
                vote: prevState.vote <=0 ? 0 : prevState.vote - 1
            }   
        })

        this.props.onVoted(this.props.sira,this.state.vote)

    }

    render() {

        let {id,joke} = this.props.data

        return (
            <Card className={"bg-warning my-5"}>
                <Card.Body>
                    <Card.Title>ID: {id}</Card.Title>
                    <Card.Title>{joke}</Card.Title>
                    <ButtonGroup className="text-white">
                        <Button variant="danger" onClick={this.decrementVote}>Azalt</Button>
                        <span className="h4 mx-2">{this.state.vote}</span>
                        <Button variant="success" onClick={this.incrementVote}>Artir</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    }


}