

import axios from 'axios';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';

class MovieSlug extends React.Component {


    constructor() {
        super()

        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        this.getMovieTitle()
    }


    getMovieTitle() {
        axios.get(`http://www.omdbapi.com/?t=${this.props.match.params.name}&apikey=a407a7b3`).then(res => {
            console.log(res);
            this.setState({ movie: res.data })
        })
    }


    render() {



        if (!this.state.movie) {
            return <h1>Loading....</h1>
        }
        
        let { Poster, Title, Plot, Actors, Year } = this.state.movie

        return (
            <Layout>
                <Col md="12">
                    <Card className="mb-5">
                        <Button onClick={() => this.props.history.goBack()} variant="warning">Go Back</Button>
                        <Card.Img variant="top" src={Poster} height="700" />
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>
                            <Card.Text>
                                {Year}.
                            </Card.Text>
                            <Card.Text>
                                {Plot}.
                            </Card.Text>
                            <Card.Text>
                                {Actors}.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Layout>
        )
    }
}

export default MovieSlug
