import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Swal from 'sweetalert2';
class BillCart extends Component {
	totalCart = () => {
		return this.props.listCart.reduce((rs, item) => {
			return rs + item.course.fee;
		}, 0);
	};
	errOnRegister = err => {
		Swal.fire({
			position: 'center',
			icon: 'error',
			html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>${err}</b>`,
			showConfirmButton: false,
			timer: 1500,
		});
	};
	handleOnRegister = () => {
		let { listCart, history } = this.props;
		localStorage.getItem('user')
			? listCart.length
				? this.props.RegisterCourse(listCart, history)
				: this.errOnRegister('KHÔNG CÓ KHÓA HỌC NÀO TRONG GIỎ HÀNG')
			: this.errOnRegister('BẠN CHƯA ĐĂNG NHẬP');
	};
	render() {
		return (
			<section className="bill-cart">
				<h3 className="text-center">THÔNG TIN ĐƠN HÀNG</h3>
				<div className="d-flex justify-content-between so-luong">
					<p>Số lượng: </p>
					<p className="fee">{this.props.listCart.length} khóa học</p>
				</div>
				<div className="d-flex justify-content-between tam-tinh">
					<p>Tạm tính: </p>
					<p className="fee">${this.totalCart()}</p>
				</div>

				<div className="d-flex justify-content-center apply">
					<input type="text" placeholder="Mã giảm giá (nếu có)" />
					<button className="btn--purple">APPLY</button>
				</div>
				<div className="d-flex justify-content-between total">
					<p>Tổng tiền: </p>
					<p className="fee">${parseInt(this.totalCart() * 1.1)}</p>
				</div>
				<p className="text-right">Đã bao gồm VAT (nếu có)</p>
				<button className="btn--blue" onClick={this.handleOnRegister}>
					TIẾN HÀNH THANH TOÁN
				</button>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		RegisterCourse: (data, history) => {
			dispatch(actions.actRegisterCourse(data, history));
		},
	};
};
export default connect(null, mapDispatchToProps)(BillCart);
