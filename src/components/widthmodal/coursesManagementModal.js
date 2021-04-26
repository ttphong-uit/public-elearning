import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
class coursesManagementModal extends Component {
	handleNameForm = () => {
		let nameForm = '';
		switch (this.props.nameForm) {
			case 'THEM_KHOA_HOC':
				nameForm = 'Thêm khóa học';
				break;
			case 'SUA_KHOA_HOC':
				nameForm = 'Sửa khóa học';
				break;
			case 'THEM_NGUOI_DUNG':
				nameForm = 'Thêm người dùng';
				break;
			case 'SUA_NGUOI_DUNG':
				nameForm = 'Sửa người dùng';
				break;
			default:
				break;
		}
		return nameForm;
	};
	render() {
		return (
			<Fragment>
				<div class="modal-body">
					<div className="cm-modal">
						<div className="cm-modal-content-left">
							<div className="form-group">
								<label tmlFor="maKhoaHoc">Mã khóa học </label>
								<input
									type="text"
									id="maKhoaHoc"
									name="maKhoaHoc"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="biDanh">Bí danh </label>
								<input
									type="text"
									id="biDanh"
									name="biDanh"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="tenKhoaHoc">Tên khóa học</label>
								<input
									type="text"
									id="tenKhoaHoc"
									name="tenKhoaHoc"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
						</div>
						<div className="cm-modal-content-right">
							<div className="form-group">
								<label htmlFor="danhMucKhoaHoc">Danh mục khóa học</label>
								<input
									type="text"
									id="danhMucKhoaHoc"
									name="danhMucKhoaHoc"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="luotXem">Lượt xem</label>
								<input
									type="number"
									id="luotXem"
									name="luotXem"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="danhGia">Đánh giá</label>
								<input
									type="number"
									id="danhGia"
									name="danhGia"
									className="form-control"
									aria-describedby="helpId"
								/>
							</div>
						</div>
						<div className="cm-modal-content-bottom">
							<div className="form-group">
								<label htmlFor="hinhAnh" className="btn--black">
									Chọn hình cho khóa học
								</label>
								<input
									name="hinhAnh"
									id="hinhAnh"
									type="file"
									accept="image/*"
									style={{ display: 'none' }}
								/>
							</div>
							<label htmlFor="moTa">Mô tả</label>
							<textarea name="danhGia" className="form-control" aria-describedby="helpId" />
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-primary"
						onClick={() => {
							this.props.onSubmit(null, this.props.nameForm);
						}}
					>
						{this.handleNameForm()}
					</button>
					<button type="button" class="btn btn-secondary" data-dismiss="modal">
						Close
					</button>
				</div>
			</Fragment>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onSubmit: (data, nameForm) => {
			switch (nameForm) {
				case 'THEM_KHOA_HOC':
					dispatch(actions.actGetListCourseAPI());
					break;
				case 'SUA_KHOA_HOC':
					dispatch(actions.actGetListCourseAPI());
					break;
				case 'THEM_NGUOI_DUNG':
					dispatch(actions.actGetListCourseAPI());
					break;
				case 'SUA_NGUOI_DUNG':
					dispatch(actions.actGetListCourseAPI());
					break;
				default:
					break;
			}
		},
	};
};
export default connect(null, mapDispatchToProps)(coursesManagementModal);
