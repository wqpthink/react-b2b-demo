/**
 * 附头部且侧边装饰布局
 */
import React, {Fragment} from 'react';
export default WrapComponent => props => (
    <Fragment>
        <div>这是附头部且侧边装饰布局</div>
        <WrapComponent/>
    </Fragment>
);

