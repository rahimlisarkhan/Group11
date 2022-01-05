import { Component } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

class Todo extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          todos:[],
        }
        
        this.addTodo = this.addTodo.bind(this)
      }
    
      addTodo(text){

        
        
        this.setState({
            todos:[...this.state.todos, text ]
        })
      }

    render() {

        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header as="h5">TODO APP</Card.Header>
                            <Card.Body>
                                <Card.Title>Please write todos</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <TodoInput addTodo={this.addTodo} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <TodoList list={this.state.todos} />
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Todo