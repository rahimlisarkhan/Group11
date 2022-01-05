import { Component } from "react";
import { ListGroup } from "react-bootstrap";



export default class TodoList extends Component {
    render() {
        let { list } = this.props

        return (
            <ListGroup className="mt-5">
                {list?.map((todo, index) => <ListGroup.Item key={`id-${index}`}>{todo}</ListGroup.Item>)}
            </ListGroup>
        )
    }
}