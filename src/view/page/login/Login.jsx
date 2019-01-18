import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {} from './login-style';

class Login extends PureComponent{

    render(){

        return (
            <Fragment>
                <div>这是登录页面</div>
                <a href="./home.html">主页</a>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
