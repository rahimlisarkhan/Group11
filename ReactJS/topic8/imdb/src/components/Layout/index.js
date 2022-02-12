import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Header from '../Header/Header';

class Layout extends React.Component {

    render() {
        return (
                 <>
                 <Header/>
                <Container>
                    <Row>
                        {this.props.children}
                    </Row>
                </Container>
                 </>
        )
    }
}

export default Layout