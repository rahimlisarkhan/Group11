import { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";




class MovieCard extends Component {
    render() {

        let { Poster, Title, Year, history:{push}} = this.props

        console.log(this.props);
        return (
            <Col md="3">
                <Card style={{ width: '18rem' }} className="mb-5">
                    <Card.Img variant="top" src={Poster} height="300" />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            {Year}.
                        </Card.Text>
                        <Button onClick={()=>push(`movie/title=${Title}`)} variant="warning">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>

        )
    }
}

export default withRouter(MovieCard)