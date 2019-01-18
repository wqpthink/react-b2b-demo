
import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from 'page/home/store/interface';
import {reducer as loginReducer} from 'page/login/store/interface';
export default combineReducers({
	home: homeReducer,
	login: loginReducer
});