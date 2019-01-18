import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store_basic from 'conf/basic-store';
import GlobalStyle from 'conf/reset-style';
import Home from './Home';
ReactDOM.render(<Provider store = {store_basic}><Fragment><GlobalStyle/><Home/></Fragment></Provider>, document.getElementById('root'));
