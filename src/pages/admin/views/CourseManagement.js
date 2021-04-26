import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import widthmodal from './../../../components/widthmodal/widthmodal';
import coursesManagementModal from '../../../components/widthmodal/coursesManagementModal';

const FormModal = widthmodal(coursesManagementModal);
const CourseManagement = props => {
	const [state, setstate] = useState({ status: true });
	useEffect(() => {
		props.getListCourse();
	}, []);
	let { listCourse } = props;
	const renderListCourse = () => {
		return listCourse.map((item, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>
						<div className="cm-name">
							<img src={item.hinhAnh} alt={item.tenKhoaHoc} />
							<div>
								<p>{item.tenKhoaHoc}</p>
								<p className="cm-category">{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
							</div>
						</div>
					</td>
					<td>
						<div className="cm-creator">
							<p>{item.nguoiTao.taiKhoan}</p>
							<p className="cm-type-creator">{item.nguoiTao.tenLoaiNguoiDung}</p>
						</div>
					</td>
					<td>{item.ngayTao}</td>
					<td>
						<div className="cm-actions">
							<button
								className="bttn btn--blue"
								data-toggle="modal"
								data-target="#modelId"
								onClick={() => {
									setstate({ status: false });
								}}
							>
								<i class="fa fa-edit"></i>
							</button>
							<button
								className="bttn btn--red"
								onClick={() => {
									props.onDelete(item.maKhoaHoc);
								}}
							>
								<i class="fa fa-trash "></i>
							</button>
						</div>
					</td>
				</tr>
			);
		});
	};
	return (
		<section className="course-management">
			<h3 className="title">
				<i class="fa fa-book" aria-hidden="true"></i> COURSES MANAGEMENT
			</h3>
			<div className="cm-head">
				<button
					className="btn--green"
					data-toggle="modal"
					data-target="#modelId"
					onClick={() => {
						setstate({ status: true });
					}}
				>
					<i class="fa fa-plus" aria-hidden="true"></i>ADD COURSE
				</button>
				<input placeholder="Search course" />
			</div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>STT</th>
						<th>TÊN KHÓA HỌC</th>
						<th>NGƯỜI TẠO</th>
						<th>NGÀY TẠO</th>
						<th>THAO TÁC</th>
					</tr>
				</thead>
				<tbody>{listCourse ? renderListCourse() : ''}</tbody>
			</table>
			<FormModal nameForm={state.status ? 'THEM_KHOA_HOC' : 'SUA_KHOA_HOC'} />
		</section>
	);
};

const mapStateToProps = state => {
	return {
		listCourse: state.khoaHocReducer.listCourse,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getListCourse: () => {
			dispatch(actions.actGetListCourseAPI());
		},
		onDelete: maKhoaHoc => {
			dispatch(actions.actDeleteCourseApi(maKhoaHoc));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseManagement);
