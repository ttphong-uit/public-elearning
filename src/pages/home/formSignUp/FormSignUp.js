import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Swal from 'sweetalert2';
class FormSignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			values: {
				taiKhoan: '',
				matKhau: '',
				hoTen: '',
				soDT: '',
				email: '',
			},
			errors: {
				taiKhoan: '',
				matKhau: '',
				hoTen: '',
				soDT: '',
				email: '',
			},
			valids: {
				taiKhoan: false,
				matKhau: false,
				hoTen: false,
				soDT: false,
				email: false,
				form: false,
			},
		};
	}
	componentDidMount() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}
	handleOnChange = e => {
		let { name, value } = e.target;
		this.setState({ values: { ...this.state.values, [name]: value } });
	};

	handleErrors = e => {
		let { name, value, placeholder } = e.target;
		let { errors, valids } = this.state;
		let isValid = false;
		let massage = value === '' ? placeholder + ' không được rỗng' : '';
		isValid = massage !== '' ? false : true;
		if (value !== '') {
			switch (name) {
				case 'taiKhoan':
					if (value.length < 4 || value.length > 9) {
						isValid = false;
						massage = placeholder + 'phải có độ dài từ 4 đến 9 kí tự.';
					} else if (!value.match('^[a-z0-9_-]{3,16}$')) {
						isValid = false;
						massage = placeholder + ' không đúng định dạng.';
					}
					break;
				case 'matKhau':
					if (value.length < 6 || value.length > 12) {
						isValid = false;
						massage = placeholder + 'phải có độ dài từ 6 đến 12 kí tự.';
					} else if (!value.match('^[a-zA-Z0-9]+$')) {
						isValid = false;
						massage = placeholder + ' không đúng định dạng.';
					}
					break;
				case 'hoTen':
					if (
						!value.match(
							'^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
							'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ' +
							'ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$'
						)
					) {
						isValid = false;
						massage = placeholder + ' không đúng định dạng.';
					}
					break;
				case 'soDT':
					if (!value.match('^[0-9]*$')) {
						isValid = false;
						massage = placeholder + ' không đúng định dạng.';
					}
					break;
				case 'email':
					if (
						!value.match(
							'^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' +
							'[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'
						)
					) {
						isValid = false;
						massage = placeholder + ' không đúng định dạng.';
					}
					break;
				default:
					break;
			}
		}

		this.setState(
			{
				errors: { ...errors, [name]: massage },
				valids: { ...valids, [name]: isValid },
			},
			() => {
				this.formValidation();
			}
		);
	};

	formValidation = () => {
		let { valids } = this.state;
		this.setState({
			valids: {
				...valids,
				form: valids.taiKhoan && valids.matKhau && valids.hoTen && valids.soDT && valids.email,
			},
		});
	};
	handleOnSubmit = e => {
		e.preventDefault();
		this.state.valids.form
			? this.props.SignUpUser(this.state.values, this.props.propsCompnent.history)
			: Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Vui lòng kiểm tra thông tin!',
			});
	};
	render() {
		let { errors } = this.state;
		return (
			<section className="form">
				<img src="../img/6.jpg" />
				<div className="main-content signup">
					<form>
						<h4>ĐĂNG KÝ</h4>
						<div className="d-flex justify-content-between">
							<div className="gr-input border-right">
								<div>
									<TextField
										id="standard-basic"
										label="Tài Khoản"
										onChange={this.handleOnChange}
										onBlur={this.handleErrors}
										onKeyUp={this.handleErrors}
										placeholder="Tài Khoản"
										margin="normal"
										name="taiKhoan"
									/>
								</div>
								{errors.taiKhoan !== '' ? (
									<div className="massage-error">{errors.taiKhoan}</div>
								) : (
										<div className="massage-error-hide">massage-error-hide</div>
									)}
								<div>
									<TextField
										id="standard-basic"
										label="Mật Khẩu"
										onChange={this.handleOnChange}
										onBlur={this.handleErrors}
										onKeyUp={this.handleErrors}
										placeholder="Mật Khẩu"
										margin="normal"
										name="matKhau"
									/>
								</div>
								{errors.matKhau !== '' ? (
									<div className="massage-error">{errors.matKhau}</div>
								) : (
										<div className="massage-error-hide">massage-error-hide</div>
									)}
								<div>
									<TextField
										id="standard-basic"
										label="Họ Tên"
										onChange={this.handleOnChange}
										onBlur={this.handleErrors}
										onKeyUp={this.handleErrors}
										placeholder="Họ Tên"
										margin="normal"
										name="hoTen"
									/>
								</div>
								{errors.hoTen !== '' ? (
									<div className="massage-error">{errors.hoTen}</div>
								) : (
										<div className="massage-error-hide">massage-error-hide</div>
									)}
							</div>
							<div className="gr-input">
								<div>
									<TextField
										id="standard-basic"
										label="Số Điện Thoại"
										onChange={this.handleOnChange}
										onBlur={this.handleErrors}
										onKeyUp={this.handleErrors}
										placeholder="Số Điện Thoại"
										margin="normal"
										name="soDT"
									/>
								</div>
								{errors.soDT !== '' ? (
									<div className="massage-error">{errors.soDT}</div>
								) : (
										<div className="massage-error-hide">massage-error-hide</div>
									)}
								<div>
									<TextField
										id="standard-basic"
										label="Email"
										onChange={this.handleOnChange}
										onBlur={this.handleErrors}
										onKeyUp={this.handleErrors}
										placeholder="Email"
										margin="normal"
										name="email"
									/>
								</div>
								{errors.email !== '' ? (
									<div className="massage-error">{errors.email}</div>
								) : (
										<div className="massage-error-hide">massage-error-hide</div>
									)}
							</div>
						</div>
						<button className="pulse" onClick={this.handleOnSubmit}>
							ĐĂNG KÝ
						</button>
						<NavLink className="go-to-form-another" to="/home/dang-nhap">
							Bạn đã có tài khoản?
						</NavLink>
					</form>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		SignUpUser: (data, history) => {
			dispatch(actions.actSignUp(data, history));
		},
	};
};
export default connect(null, mapDispatchToProps)(FormSignUp);
