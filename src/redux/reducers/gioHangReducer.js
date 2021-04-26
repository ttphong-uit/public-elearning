import * as actionTypes from '../constants/actionTypes';
let initialState = {
	listCart: [],
	giamGia: {
		maGiamGia: 'phongoccho',
		mucGiamGia: 0.2,
	},
};
const GioHangReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			let index = state.listCart.findIndex(item => {
				return item.course.maKhoaHoc === action.data.course.maKhoaHoc;
			});
			if (index === -1) {
				state.listCart = [...state.listCart, action.data];
			}
			return { ...state };
		case actionTypes.DELETE_INTO_CART:
			let listCart = [...state.listCart];
			let indexx = state.listCart.findIndex(item => {
				return item.course.maKhoaHoc === action.maKhoaHoc;
			});
			listCart.splice(indexx, 1);
			state.listCart = listCart;
			return { ...state };
		case actionTypes.RELOAD_CART:
			state.listCart = [];
			return { ...state };
		default:
			return { ...state };
	}
};
export default GioHangReducer;
