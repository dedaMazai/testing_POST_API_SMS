import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import {Jumbotron, Button, Input, Row, Col, Container} from 'reactstrap';

import './css/contact.css';
export default class  Contact extends Component{
    constructor(props) {
        super(props);
        this.myRefReg = React.createRef();
        this.myCode = React.createRef();
        this.state = {
            num: "",
            send: false,
            star: false,
            error: false
        };
      }

    gotService = new gotService();
    regTest = () => {
        let reg = /^\+[0-9]{11}$/,
             tel = /[0-9]{11}$/;
        if (reg.test(this.myRefReg.current.value)===true) {
            this.setState({num: this.myRefReg.current.value.match(tel)[0]});
        } else {
            this.setState({num: ""})
        }
    }
    //Проверка введеного номера и запись в state.num подходящего

    onError = (e) => {
        this.setState({error: true})
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }

    sendNum = () => {
        this.gotService.authTel(this.state.num)
            .then(this.onTelLoaded())
            .catch(this.onError);
    }
    //Запрос к API для отправки смс на номер

    onTelLoaded = (tel) => {
        console.log(tel)
        this.setState({send: true})
    }

    // onTelLoaded = (tel) => {
    //     if (tel.result==="Ok"){
    //         this.setState({send: true})
    //     }
    // }
    //Если API отвечает, что смс отправлено, открываем блок для ввода кода

    sendCode = () => {
        this.gotService.authCode(this.state.num,this.myCode.current.value)
            .then(this.onCodeLoaded())
            .catch(this.onError);
    }
    //Запрос к API для проверки введеного кода и фактического отправленого на номер

    onCodeLoaded = (telCode) => {
        if (telCode.newUserCreated===true){
            this.setState({
                star: true,
                send: false
            })
            this.props.kilDisable()
        }
    }
    //Если API отвечает, что новый пользователь создан, закрываем окно для ввода кода, ставим галочку возле поля с номером,
    //и разблокируем кнопку для отправки формы и открытия приложения

    render(){
        if (this.state.error){
            return <Container>
                         <Row>
                            <Col md="12">
                                 <ErrorMessage/>
                            </Col>
                        </Row>
                    </Container>
        }
        return (
            <>
                <Container fluid className="contact">
                    <Row>
                        <Col md={{ size: 4}} ><br/>
                            <div className={this.state.send===true?"code":"butHidden"}> {/*Блок для ввода кода из смс появится когда API ответит положительно об отправке смс*/}
                                <Jumbotron fluid>
                                    <Col>
                                        <h1 className=" text-center">КОД:</h1>
                                        <Input ref={this.myCode}/><br/>
                                        <Input type="button" value="Отправить" onClick={this.sendCode} />
                                    </Col>
                                </Jumbotron>
                            </div>
                        </Col>
                        <Col>
                            <Row><Col md={{ size: 4, offset: 1}}><Input placeholder="email@comp.com" type="email"/></Col></Row><br/>
                            <Row><Col md={{ size: 4, offset: 1}}><Input placeholder="Pass" type="password"/></Col></Row><br/>
                            <Row><Col md={{ size: 4, offset: 1}}><Input placeholder="Confirm pass" type="password"/></Col></Row><br/>
                            <Row>
                                <Col md={{ size: 1}}>
                                    <div className={this.state.star===true?"ok":"butHidden"}>
                                        &#10004;
                                    </div>
                                </Col>
                                <Col md={{ size: 4}}>
                                    <input className="simple-input" placeholder="phone number: +7..."
                                        type="tel"
                                        ref={this.myRefReg}
                                        onChange={this.regTest}/>
                                </Col>
                                <Col md={{ size: 2}} color="success">
                                    <div  className={this.state.num.length ===11?"butTrue":"butHidden"}> {/*Блок появится когда телефон будет верно введен*/}
                                        <Button onClick={this.sendNum}
                                            color="success">Отправить</Button>
                                    </div>
                                </Col>
                            </Row><br/>
                            <Row><Col md={{ size: 4, offset: 1}}><Input placeholder="http://facebook" type="url"/></Col></Row><br/>
                            <Row><Col md={{ size: 4, offset: 1}}><Input placeholder="http://telegram" type="url"/></Col></Row>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
