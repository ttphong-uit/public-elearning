import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Swal from 'sweetalert2';
class FormSignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: '',
			matKhau: '',
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
		let { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};
	handleOnSubmit = e => {
		e.preventDefault();
		this.state.taiKhoan && this.state.matKhau
			? this.props.signInUser(this.state, this.props.propsCompnent.history)
			: Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Vui lòng nhập đầy đủ nội dung!',
			});
	};
	render() {
		return (
			<section className="form">
				<img src="../img/6.jpg" />
				<div className="main-content">
					<form>
						<h4>ĐĂNG NHẬP</h4>
						<div>
							<TextField
								id="standard-basic"
								label="Tài Khoản"
								margin="normal"
								onChange={e => {
									this.handleOnChange(e);
								}}
								name="taiKhoan"
							/>
						</div>
						<div>
							<TextField
								id="standard-basic"
								label="Mật Khẩu"
								margin="normal"
								onChange={e => {
									this.handleOnChange(e);
								}}
								name="matKhau"
							/>
						</div>
						<div className="mt-1">
							<Checkbox
								value="checkedB"
								color="primary"
								inputProps={{
									'aria-label': 'secondary checkbox',
								}}
							/>
							<span>Ghi nhớ tài khoản</span>
						</div>
						<button className="pulse" onClick={this.handleOnSubmit}>
							ĐĂNG NHẬP
						</button>
						<NavLink className="go-to-form-another" to="/home/dang-ky">
							Bạn chưa có tài khoản?
						</NavLink>
					</form>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		signInUser: (data, history) => {
			dispatch(actions.actSignIn(data, history));
		},
	};
};
export default connect(null, mapDispatchToProps)(FormSignIn);
