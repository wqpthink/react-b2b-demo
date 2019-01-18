import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store_basic from 'conf/basic-store';
import GlobalStyle from 'conf/reset-style';
import Login from './Login';
ReactDOM.render(<Provider store = {store_basic}><Fragment><GlobalStyle/><Login/></Fragment></Provider>, document.getElementById('root'));
