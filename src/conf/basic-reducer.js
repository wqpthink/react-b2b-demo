
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from 'common/header/store/interface';
import {reducer as sidenavReducer} from 'common/sidenav/store/interface';
import {reducer as homeReducer} from 'page/home/store/interface';
import {reducer as loginReducer} from 'page/login/store/interface';
export default combineReducers({
	header: headerReducer,
	sidenav: sidenavReducer,
	home: homeReducer,
	login: loginReducer
});