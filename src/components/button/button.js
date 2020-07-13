import React from 'react';
import { connect } from 'react-redux';
import {runAuth} from '../../actions';

import './button.css';
function Button({runAuth}) {
    return <button className="buttonAuth" onClick={runAuth}>Login</button>;
};
//Кнопка Регистрации

const mapStateToProps =  (state) =>{
    return {
        showApp: state.showApp
    }
}


const mapDispatchToProps = {
    runAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);