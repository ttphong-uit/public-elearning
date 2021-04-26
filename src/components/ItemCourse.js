import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { UncontrolledPopover, PopoverBody } from 'reactstrap';
import Swal from 'sweetalert2';
class ItemCourse extends Component {
	goTop = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	addToCart = () => {
		localStorage.getItem('user')
			? this.props.addToCart(this.props)
			: Swal.fire({
					position: 'center',
					icon: 'error',
					html: `<h3 style="color:#f27474"><b>ERROR!</b></h3><b>VUI LÒNG ĐĂNG NHẬP</b>`,
					showConfirmButton: false,
					timer: 1500,
			  });
	};
	renderAddToCart = () => {
		return this.props.listCart.findIndex(item => {
			return item.course.maKhoaHoc === this.props.course.maKhoaHoc;
		}) === -1 ? (
			<button className="btn--blue btnn" onClick={this.addToCart}>
				THÊM GIỎ HÀNG
			</button>
		) : (
			<NavLink className="btn--purple btnn" to="/home/detail-cart">
				TỚI GIỎ HÀNG
			</NavLink>
		);
	};
	handleAddToCart = () => {
		return this.props.courseOfUser ? (
			this.props.courseOfUser.findIndex(item => {
				return item.maKhoaHoc === this.props.course.maKhoaHoc;
			}) === -1 ? (
				this.renderAddToCart()
			) : (
				<NavLink className="btn--white btnn" to="/home/profile" onClick={this.goTop}>
					TỚI HỒ SƠ
				</NavLink>
			)
		) : (
			this.renderAddToCart()
		);
	};
	renderPopover = () => {
		let { course } = this.props;
		return (
			<UncontrolledPopover trigger="hover" placement="right" target={'Popover-' + this.props.id}>
				<PopoverBody>
					<div className="course-info">
						<div className="course-infomation">
							<p className="text-sm">Ngày khởi tạo: {course.ngayTao}</p>
							<h3 className="course-name">{course.tenKhoaHoc}</h3>
							<p className="text-sm">{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
							<span className="more-infomation">
								<i className="fa fa-eye"></i> {course.luotXem} | <i className="fa fa-mortar-board"></i>
								{course.soLuongHocVien} | <i className="fa fa-heart"></i> 99
							</span>
							<p className="course-description">{course.moTa}</p>
							<div className="detail-course">
								<NavLink
									className="btn--black"
									to={`/home/detail-course/${course.maKhoaHoc}?${course.fee}`}
								>
									Chi Tiết
								</NavLink>
								{this.handleAddToCart()}
							</div>
						</div>
					</div>
				</PopoverBody>
			</UncontrolledPopover>
		);
	};
	render() {
		let { course } = this.props;
		return (
			<div id={'Popover-' + this.props.id} className="ItemCourses">
				<div className="allCourse-item ">
					<div className="image">
						<div className="wrap-img">
							<div className="wrap-image-IC" style={{ backgroundImage: `url(${course.hinhAnh})` }}></div>
						</div>
						<div className="teacher-img">
							<div className="row m-0 align-center">
								<div className="col-3 left-side ">
									<img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
									<div className="teacher-name">
										<span> {course ? course.nguoiTao.hoTen : null} </span>
									</div>
								</div>
								<div className="col-9 right-side">
									<div className="course-name">
										<span>{course.tenKhoaHoc}</span>
									</div>
									<div className="more-infomation">
										<div className="more-info-item">
											<span>
												<i className="fa fa-graduation-cap"> </i> <span>Học viên</span>
												<p>{course.soLuongHocVien}</p>
											</span>
										</div>
										<div className="more-info-item">
											<span>
												<i className="fa fa-eye"> </i>
												<span>Lượt xem</span>
												<p>{course.luotXem}</p>
											</span>
										</div>
										<div className="more-info-item">
											<span>
												{' '}
												<span className="dollar">
													$ <label>Giá</label>
													<p>{course.fee} </p>
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{this.renderPopover()}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		listCart: state.GioHangReducer.listCart,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		addToCart: product => {
			dispatch(actions.actAddToCart(product));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemCourse);
