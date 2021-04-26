import React from 'react';

export default function userManagementModal() {
	return (
		<div className="um-modal">
			<div className="um-modal-content-left">
				<div className="form-group">
					<label htmlFor="">Tài khoản </label>
					<input type="text" name="taiKhoan" className="form-control" aria-describedby="helpId" />
				</div>
				<div className="form-group">
					<label htmlFor="">Mật khẩu </label>
					<input type="text" name="matKhau" className="form-control" aria-describedby="helpId" />
				</div>
				<div className="form-group">
					<label htmlFor="">Họ tên </label>
					<input type="text" name="hoTen" className="form-control" aria-describedby="helpId" />
				</div>
				<div className="form-group">
					<label htmlFor="">Số điện thoại </label>
					<input type="text" name="soDt" className="form-control" aria-describedby="helpId" />
				</div>
			</div>
			<div className="um-modal-content-right">
				<div className="form-group">
					<label htmlFor="">Mã loại người dùng </label>
					<input type="text" name="maLoaiNguoiDung" className="form-control" aria-describedby="helpId" />
				</div>
				<div className="form-group">
					<label htmlFor="">Mã nhóm </label>
					<input type="text" name="maNhom" className="form-control" aria-describedby="helpId" />
				</div>

				<div className="form-group">
					<label htmlFor="">Email</label>
					<input type="text" name="email" className="form-control" aria-describedby="helpId" />
				</div>
			</div>
		</div>
	);
}
