import React, {Component} from 'react';
import ErrorMessage from '../errorMessage';
import {Row, Container} from 'reactstrap';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return <Container>
                            <Row><ErrorMessage/></Row>
                    </Container>
        }

        return this.props.children;
    }
}