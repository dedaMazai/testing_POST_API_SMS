import React, {Component} from 'react';
import Auth from '../auth';
import Button from '../button';
import Appy from '../appy';
import { connect } from 'react-redux';

import './app.css';


class App extends Component {
    render() {
        if (this.props.showApp===0) {
            return <Button/>
        }
        else if (this.props.showApp===1) {
            return <Auth runApp={this.runApp}/>;
        }
        else if (this.props.showApp===2) {
            return <Appy/>;
        }else
            return <Button/>;
        }
}

const mapStateToProps =  (state) =>{
    return {
        showApp: state.showApp
    }
}

export default connect(mapStateToProps)(App);
