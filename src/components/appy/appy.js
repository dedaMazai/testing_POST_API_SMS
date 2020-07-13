import React, {Component} from 'react';
import HeaderAppy from '../headerAppy';
import Menu from '../menu';
import {Events, Party, Account} from '../pages';
import {Row, Col} from 'reactstrap';
import { connect } from 'react-redux';

import './appy.css';


class Appy extends Component {
    render() {
        return (
            <>
                <Row>
                    <HeaderAppy/>
                </Row>
                <Row noGutters className='appy'>
                    <Col md="2"  className='Menu'>
                        <Menu/>
                    </Col>
                    <Col md={{ size: 10}}>
                        <Row noGutters className="justify-content-center">
                            <h1>Список мероприятий</h1>
                        </Row>
                        <Row noGutters  className='MenuResult'>
                            <div className={this.props.buttons===0?"divTrue":"divHidden"}>
                                <Events/>
                            </div>
                            <div className={this.props.buttons===1?"divTrue":"divHidden"}>
                                <Party/>
                            </div>
                            <div className={this.props.buttons===2?"divTrue":"divHidden"}>
                                <Account/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }

};

const mapStateToProps =  (state) =>{
    return {
        buttons: state.buttons
    }
}

export default connect(mapStateToProps)(Appy);