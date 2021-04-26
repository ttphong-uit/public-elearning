import * as actionTypes from '../constants/actionTypes';
let initialState = {
	accountInfo: {},
	userList: []
};

const NguoiDungReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USER_LIST:
			state.userList = action.data;
			return { ...state }
		case actionTypes.CANCEL_ATTENDED_COURSE:
			let accountInfo = { ...state.accountInfo };
			let index = accountInfo.chiTietKhoaHocGhiDanh.findIndex(item => {
				return item.maKhoaHoc == action.data.maKhoaHoc;
			});
			accountInfo.chiTietKhoaHocGhiDanh.splice(index, 1);
			state.accountInfo = accountInfo;
			return { ...state };
		case actionTypes.GET_INFO_ACCOUNT:
			state.accountInfo = action.data;
			return { ...state };

		case actionTypes.LOGOUT_ACCOUNT:
			state.accountInfo = action.data;
			return { ...state };
		default:
			return { ...state };
	}
};

export default NguoiDungReducer;
