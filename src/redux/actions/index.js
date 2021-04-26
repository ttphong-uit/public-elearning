import * as actionTypes from '../constants/actionTypes';
import { callApi } from '../../utils/callApi';
import Swal from 'sweetalert2';

const successApi = strSuccess => {
	return Swal.fire({
		position: 'center',
		icon: 'success',
		html: `<h3 style="color:#a5dc86"><b>SUCCESS!</b></h3><b>${strSuccess}</b>`,
		showConfirmButton: false,
		timer: 1500,
	});
};
const errorApi = err => {
	return Swal.fire({
		position: 'center',
		icon: 'error',
		html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${err.response.data.toUpperCase()}</b>`,
		showConfirmButton: false,
		timer: 1500,
	});
};

export const actGetListCourseAPI = () => {
	return dispatch => {
		callApi('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
			.then(rs => {
				let listCourse = [];
				if (rs.data) {
					listCourse = rs.data.map(item => ({
						...item,
						fee: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(50))) + Math.ceil(50),
					}));
				}
				dispatch({
					type: actionTypes.GET_LIST_COURSE,
					listCourse,
				});
			})
			.catch(err => {
				console.log(err.response);
			});
	};
};
export const actGetCategoryCourseAPI = () => {
	return dispatch => {
		callApi('QuanLyKhoaHoc/LayDanhMucKhoaHoc')
			.then(rs => {
				dispatch({
					type: actionTypes.GET_CATEGORY_COURSE,
					listCategoryCourse: rs.data,
				});
			})
			.catch(err => {
				console.log(err.response);
			});
	};
};

export const actGetDetailCourseAPI = id => {
	return dispatch => {
		callApi(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
			.then(rs => {
				dispatch({
					type: actionTypes.GET_DETAIL_COURSE,
					dataDetailCourse: rs.data,
				});
			})
			.catch(err => {
				console.log(err.response);
			});
	};
};
export const actSignIn = (data, history) => {
	return () => {
		callApi('QuanLyNguoiDung/DangNhap', 'POST', data)
			.then(rs => {
				if (window.location.pathname === '/admin') {
					if (rs.data.maLoaiNguoiDung === 'GV') {
						localStorage.setItem('infoAccountAdmin', JSON.stringify(data));
						successApi('ĐĂNG NHẬP THÀNH CÔNG.').then(() => {
							localStorage.setItem('userAdmin', JSON.stringify(rs.data));
							history.push('/admin/dashboard');
						});
					} else {
						let message = 'Bạn không có quyền truy cập';
						Swal.fire({
							position: 'center',
							icon: 'error',
							html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${message.toUpperCase()}</b>`,
							showConfirmButton: false,
							timer: 1500,
						});
					}
				} else {
					localStorage.setItem('infoAccount', JSON.stringify(data));
					successApi('ĐĂNG NHẬP THÀNH CÔNG.').then(() => {
						localStorage.setItem('user', JSON.stringify(rs.data));
						history.push('/home');
					});
				}
			})
			.catch(err => {
				errorApi(err);
			});
	};
};
export const actLogOut = () => {
	return dispatch => {
		localStorage.removeItem('user');
		localStorage.removeItem('infoAccount');
		dispatch({
			type: actionTypes.LOGOUT_ACCOUNT,
			data: {},
		});
	};
};

export const actSignUp = (data, history) => {
	return () => {
		callApi('QuanLyNguoiDung/DangKy', 'POST', { ...data, maNhom: 'GP01' })
			.then(rs => {
				successApi('ĐĂNG KÍ THÀNH CÔNG').then(() => {
					history.push('/home/dang-nhap');
				});
			})
			.catch(err => {
				errorApi(err);
			});
	};
};
export const actGetListUserAPI = () => {
	return dispatch => {
		callApi('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
			.then(rs => {
				dispatch({
					type: actionTypes.GET_USER_LIST,
					data: rs.data,
				});
			})
			.catch(err => {
				console.log(err.response.data);
			});
	};
};

export const actGetInfoAccount = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	if (user) {
		const InfoAccount = JSON.parse(localStorage.getItem('infoAccount'));
		return dispatch => {
			callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST', InfoAccount, {
				Authorization: `Bearer ${user.accessToken}`,
			})
				.then(rs => {
					dispatch({
						type: actionTypes.GET_INFO_ACCOUNT,
						data: rs.data,
					});
				})
				.catch(err => {
					console.log(err);
				});
		};
	} else return dispatch => {};
};

export const actPUTinfoAccount = data => {
	const user = JSON.parse(localStorage.getItem('user'));
	return () => {
		callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung', 'PUT', data, {
			Authorization: `Bearer ${user.accessToken}`,
		})
			.then(rs => {
				successApi('CẬP NHẬT THÔNG TIN THÀNH CÔNG.');
			})
			.catch(err => {
				errorApi(err);
			});
	};
};

export const actCancelAttendCourse = data => {
	const user = JSON.parse(localStorage.getItem('user'));
	return dispatch => {
		callApi('QuanLyKhoaHoc/HuyGhiDanh', 'POST', data, { Authorization: `Bearer ${user.accessToken}` })
			.then(rs => {
				successApi('HỦY GHI DANH THÀNH CÔNG.').then(() => {
					dispatch({
						type: actionTypes.CANCEL_ATTENDED_COURSE,
						data: data,
					});
				});
			})
			.catch(err => {});
	};
};

export const actAddToCart = data => {
	return dispatch => {
		dispatch({
			type: actionTypes.ADD_TO_CART,
			data,
		});
	};
};

export const actRegisterCourse = (listCart, history) => {
	const user = JSON.parse(localStorage.getItem('user'));
	return dispatch => {
		listCart.map(item => {
			callApi(
				'QuanLyKhoaHoc/DangKyKhoaHoc',
				'POST',
				{ maKhoaHoc: item.course.maKhoaHoc, taiKhoan: user.taiKhoan },
				{ Authorization: `Bearer ${user.accessToken}` }
			)
				.then(rs => {
					successApi('GHI DANH THÀNH CÔNG.').then(() => {
						dispatch({
							type: actionTypes.RELOAD_CART,
						});
						history.push('/home');
					});
				})
				.catch(err => {
					errorApi(err);
				});
		});
	};
};

export const actDeleteIntoCart = maKhoaHoc => {
	return dispatch => {
		dispatch({
			type: actionTypes.DELETE_INTO_CART,
			maKhoaHoc,
		});
	};
};

export const actDeleteCourseApi = maKhoaHoc => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return () => {
		callApi(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`, 'DELETE', null, {
			Authorization: `Bearer ${userAdmin.accessToken}`,
		})
			.then(rs => {
				console.log(rs);
			})
			.catch(err => {
				console.log(err.response);
			});
	};
};
