import { combineReducers } from 'redux';
import khoaHocReducer from './khoaHocReducer';
import NguoiDungReducer from './nguoiDungReducer';
import GioHangReducer from './gioHangReducer';

const rootReducer = combineReducers({
	khoaHocReducer,
	NguoiDungReducer,
	GioHangReducer,
});

export default rootReducer;
