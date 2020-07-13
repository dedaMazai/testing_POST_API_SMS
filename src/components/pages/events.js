import React, {Component} from 'react';
import {Input, Button, Row, Col, Container} from 'reactstrap';

import img from './img/foto.jpg';

import './css/events.css';
export default class  Events extends Component{
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.previewFile = this.previewFile.bind(this);
        this.state = {
            img: img,
        };
    }
    previewFile() {
        var file = this.myRef.current.files[0],
            reader = new FileReader();

        reader.onloadend = () => {
            this.setState({img: reader.result})
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({img: ""})
        }
    }
    //Скрипт для показа выбраной фотографии

    render(){
        return (
            <Container fluid>
                <Row>
                    <Col md="2"><Button block outline color="link"><h5>Участники</h5></Button></Col>
                    <Col md="2"><Button block outline color="link"><h5>Информация</h5></Button></Col>
                    <Col md="2"><Button block outline color="link"><h5>Анкета</h5></Button></Col>
                    <Col md="2"><Button block outline color="link"><h5>Легенда</h5></Button></Col>
                    <Col md="2"><Button block outline color="link"><h5>Управление</h5></Button></Col>
                </Row>
                <Row className="eventOsn">
                    <Col md={{ size: 4, offset:2}}>
                        <img src={this.state.img} height="200" alt="Image preview..."></img>
                        <br /><br />
                        <input ref={this.myRef} type="file" accept="image/*" onChange={this.previewFile}/>
                    </Col>
                    <Col md={{ size: 4}}>
                        <Input type="textarea" className="h-75" ></Input>
                        <br/>
                        <Button color="primary">Далее</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
};
