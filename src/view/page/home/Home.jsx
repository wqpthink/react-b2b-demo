import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {} from './home-style';
// import home_styles from './home-styles.scss';
import './home-test-styles.scss';

class Home extends PureComponent{

    render(){

        return (
            <Fragment>
                <h3>这是标题</h3>
                <div className="content">这是主页面</div>
                <a href="./index.html">退出登录</a>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
