import { Component } from "react";
import { Button, Form } from "react-bootstrap";



export default class TodoInput extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          text:"",
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
      }
    
      handleChange(e){
        this.setState({text:e.target.value})
      }

      handleSubmit(){

        this.props.addTodo(this.state.text)
        this.setState({text:""})
      }

    render() {
        return (
            <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" value={this.state.text} placeholder="Text" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" className="w-100" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </>

        )
    }

}