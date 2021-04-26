import React, { Component, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Swal from 'sweetalert2';
const Admin = (props) => {
	const [state, setstate] = useState(
		{ taiKhoan: "", matKhau: "" }
	)
	const handleOnchange = (event) => {
		let { name, value } = event.target;
		setstate({
			...state,
			[name]: value
		})
	}
	const handleOnSubmit = (event) => {
		event.preventDefault();
		let history = props.history;
		props.signInUser(state, history)
	}
	return <section className="form">
		<img src="../img/6.jpg" />
		<div className="main-content">
			<form>
				<h4>ĐĂNG NHẬP</h4>
				<div>
					<TextField
						id="standard-basic"
						label="Tài Khoản"
						margin="normal"
						onChange={handleOnchange}
						name="taiKhoan"
					/>
				</div>
				<div>
					<TextField
						id="standard-basic"
						label="Mật Khẩu"
						margin="normal"
						onChange={handleOnchange}
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
				<button className="pulse" onClick={handleOnSubmit} >
					ĐĂNG NHẬP
			</button>
			</form>
		</div>
	</section>;
};
const mapDispatchToProps = dispatch => {
	return {
		signInUser: (data, history) => {
			dispatch(actions.actSignIn(data, history));
		},
	};
};
export default connect(null, mapDispatchToProps)(Admin);
