import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store/interface';
import'./login-style.scss';

class Login extends PureComponent{

    render(){
        const {login_handle} = this.props;

        return (
            <Fragment>
                <div className={"login-bg"}>
                    <div className={"login-panel"}>
                        <button onClick={() => login_handle()}>登录</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    login_handle(){
        console.log('login action');
        dispatch(actionCreators.login_handle('abc','123456'));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
