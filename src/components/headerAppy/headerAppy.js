import React from 'react';
import {Row, Button, Col, Container} from 'reactstrap';

import img from './foto.jpg';

import './headerAppy.css';

function HeaderAppy() {
    return (
        <Container fluid className="headerAppy">
            <Row noGutters>
                <Col xs="3">
                    <Row noGutters>
                        <Col xs="2">
                          <img className="ava" src={img} height="40" width="40" alt="Image preview..."/>
                        </Col>
                        <Col xs="7">
                            <Button outline color="link" size="sm" block>
                                <h2 className="h1">Eventpacer</h2>
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ size: 6, offset: 3}}>
                    <Row noGutters>
                        <Col xs={{ size: 3, offset: 8}}>
                            <Button  outline color="link" size="sm">
                                <Row>
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person" fill="cornsilk" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg>
                                    <h2 className="name">Анатолий</h2>
                                </Row>
                            </Button>
                        </Col>
                        <Col xs={{ size: 1}}>
                            <Button outline color="link" size="sm">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="cornsilk" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.646 11.354a.5.5 0 0 1 0-.708L14.293 8l-2.647-2.646a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                                <path fill-rule="evenodd" d="M2 13.5A1.5 1.5 0 0 1 .5 12V4A1.5 1.5 0 0 1 2 2.5h7A1.5 1.5 0 0 1 10.5 4v1.5a.5.5 0 0 1-1 0V4a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 1 0V12A1.5 1.5 0 0 1 9 13.5H2z"/>
                                </svg>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderAppy;