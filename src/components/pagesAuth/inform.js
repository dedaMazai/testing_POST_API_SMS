import React, {Component} from 'react';
import {Input, Row, Col, Container} from 'reactstrap';

import img from './img/foto.jpg';

import './css/inform.css';
export default class  Inform extends Component{
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
    //Скрипт для показа загруженой фотографии

    render(){
        return (<Container>
                    <Row className="justify-content-center">
                        <div className="ImagePreview">
                            <img src={this.state.img} height="200" alt="Image preview..."></img>
                            <br /><br />
                            <input ref={this.myRef} type="file" accept="image/*" onChange={this.previewFile}/>
                        </div>
                        <Col md={{ size: 4}} className="ImagePreview">
                            <Row>
                                <Input placeholder="Наименование"></Input>
                            </Row>
                            <br/>
                            <Row>
                                <Input type="textarea" placeholder="Описание компании"></Input>
                            </Row>
                            <br/>
                            <Row>
                                <Input placeholder="WEB-сайт компании"></Input>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        );
    }
};
