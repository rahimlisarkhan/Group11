
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


export class FormContent extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: "",
            errorLength:false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target: { value } }) {
        this.setState({playerName:value,
                       errorLength:this.state.playerName.length > 10 ? true : false
        })
        
        console.log(value);
    }

    handleSubmit =(e)=> {
        e.preventDefault();
        if(!this.state.errorLength && this.state.playerName ){
            this.props.startGame(this.state.playerName);
        }
    }

    render() {
        const { playerName,errorLength} = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Player Name" />
                    <Form.Text className={`text-warning mt-2 ${errorLength && "text-danger"}`}>
                        {playerName.length}/10
                    </Form.Text>
                </Form.Group>
                <Button variant="warning" className={"w-100 btn-lg"} type="submit" >
                    Start
                </Button>
            </Form>
        )
    }
}

