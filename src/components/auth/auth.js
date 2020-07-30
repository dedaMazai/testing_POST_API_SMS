import React, {Component} from 'react';
import Header from '../header';
import {Hello, Inform, Contact} from '../pagesAuth';
import {Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import {runApp, onward} from '../../actions';

import './auth.css';
class Auth extends Component {
    constructor(props) {
        super(props);
        this.myButton = React.createRef();
    }

    kilDisable = () => {
        this.myButton.current.removeAttribute('disabled');
    };
    //Включаем кнопку отправки формы и перехода на страницы приложения
    render() {
        return (
            <div className='auth'>
                <Header/>
                <form className="inform" encType="multipart/form-data" method="post" >
                    <div className={this.props.buttons===0?"divTrue1":"divHidden"}>
                        <Hello/>
                    </div>
                    <div className={this.props.buttons===1?"divTrue1":"divHidden"}>
                        <Inform/>
                    </div>
                    <div className={this.props.buttons===2?"divTrue1":"divHidden"}>
                        <Contact kilDisable={this.kilDisable}/>
                    </div>
                    <Row noGutters>
                        <Col md={{size:1, offset:10}}>
                            <input  className={this.props.buttons<2?"butTrue1":"butHidden"}
                                    type="button"
                                    value="Далее"
                                    onClick={this.props.onward}/>
                            {/* Кнопка перелистывает страницы, а на последнем слайде пропадает */}
                            <input  className={this.props.buttons===2?"butTrue1":"butHidden"}
                                    type="button"
                                    disabled
                                    value="Далее"
                                    ref={this.myButton}
                                    onClick={this.props.runApp}/>
                            {/* Подставляемся на место предыдущей кнопки "Далее", но она открывает приложение (и может отправлять форму если type="submit" */}
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }

};

const mapStateToProps =  (state) =>{
    return {
        buttons: state.buttons
    }
}


const mapDispatchToProps = {
    runApp,
    onward
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);