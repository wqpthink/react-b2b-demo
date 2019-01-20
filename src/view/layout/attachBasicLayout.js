/**
 * 附基础装饰布局
 */
import React, {Fragment} from 'react';
export default WrapComponent => props => (
    <Fragment>
        <div>这是附基础装饰布局</div><WrapComponent/>
    </Fragment>
);
