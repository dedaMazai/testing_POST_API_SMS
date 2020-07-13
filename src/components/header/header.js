import React from 'react';
import {Row, Button, Col, Container} from 'reactstrap';
import { connect } from 'react-redux';
import {selectBut} from '../../actions';

import './header.css';

function Header({buttons,selectBut}) {
    return (
        <Container fluid className="header">
            <Row>
                <Col xs={4}>
                    <Button
                        outline
                        size="lg"
                        block
                        className={buttons===0?"but":null}
                        onClick={() => selectBut(0)}>Приветствие</Button>
                </Col>
                <Col xs={4}>
                    <Button
                        outline
                        size="lg"
                        block
                        className={buttons===1?"but":null}
                        onClick={() => selectBut(1)}>Общая информация</Button>
                </Col>
                <Col xs={4}>
                    <Button
                        outline
                        size="lg"
                        block
                        className={buttons===2?"but":null}
                        onClick={() => selectBut(2)}>Контакты</Button>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps =  (state) =>{
    return {
        buttons: state.buttons
    }
}


const mapDispatchToProps = {
    selectBut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);