import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import CoursePopular from '../../../components/CoursePopular';
import { NavLink } from 'react-router-dom';
class DetailCourse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fee: '',
		};
	}
	componentDidMount() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		const id = this.props.propsCompnent.match.params.id;
		this.props.getDetailCourse(id);
		let { search } = this.props.propsCompnent.location;
		this.setState({
			fee: search.slice(1, search.length),
		});
	}
	render() {
		return (
			<section className="detail-Course">
				<div className="wrap-detailCourse">
					<div
						className=" header-detailCourse"
						style={{
							backgroundImage: "url('../../img/10.jpg')",
						}}
					>
						<div className="overflow" style={{ backgroundImage: "url('../../img/bg-2.png')" }}></div>
						<div className="title detail-course">
							<span>{this.props.dataDetailCourse.tenKhoaHoc}</span>
							<h4>
								<NavLink to="/home">Trang chủ</NavLink> <span>Chi tiết khóa học</span>
							</h4>
						</div>
					</div>
					<div className="body-detailCourse">
						<div className="row ">
							<div className="col-8 ">
								<div className="Information-Course">
									<div className="tittle-course">
										{this.props.dataDetailCourse.tenKhoaHoc}
										<span className="price-course">{this.state.fee}$</span>
									</div>
									<div className="info-content">
										<div className="row m-0">
											<div className="col-3">
												<div className="item-content teacher-content">
													<img
														className="teacher-img"
														src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
													/>
													<div className="content">
														<p>
															Giảng viên{' '}
															<p>
																{this.props.dataDetailCourse.nguoiTao
																	? this.props.dataDetailCourse.nguoiTao.hoTen
																	: null}{' '}
															</p>
														</p>
													</div>
												</div>
											</div>
											<div className="col-3 borderxx">
												<div className="item-content ">
													<div className="content">
														<p>
															Danh Mục{' '}
															<p>
																{this.props.dataDetailCourse.danhMucKhoaHoc
																	? this.props.dataDetailCourse.danhMucKhoaHoc
																			.tenDanhMucKhoaHoc
																	: null}{' '}
															</p>
														</p>
													</div>
												</div>
											</div>
											<div className="col-3">
												<div className="item-content ">
													<div className="content">
														<p>
															Đánh giá{' '}
															<p>
																5 <i class="fa fa-star" aria-hidden="true"></i>
															</p>
														</p>
													</div>
												</div>
											</div>
											<div className="col-3">
												<div className="item-content">
													<div className="content last-content">
														<button
															className="btn--blue "
															onClick={() => {
																this.props.addToCart({
																	course: {
																		...this.props.dataDetailCourse,
																		fee: this.state.fee,
																	},
																});
															}}
														>
															Thêm vào giỏ hàng{' '}
															<i class="fa fa-shopping-cart" aria-hidden="true"></i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="image-detail-course">
										<div className="dc-overflow">
											<img src="../../img/bg-2.png" />
										</div>
										<img src={this.props.dataDetailCourse.hinhAnh} />
									</div>
								</div>
							</div>
							<div className="col-4">
								<div className="FearureCourse">
									<p className="featre-tittle">Thông tin khóa học</p>
									<ul>
										<li>
											<i class="fa fa-clone"></i>
											<span>
												Tên khóa học: <span>{this.props.dataDetailCourse.tenKhoaHoc}</span>
											</span>
										</li>
										<li>
											<i class="fa fa-list-ul"></i>
											<span>
												Danh mục:{' '}
												<span>
													{this.props.dataDetailCourse.danhMucKhoaHoc
														? this.props.dataDetailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc
														: null}{' '}
												</span>
											</span>
										</li>
										<li>
											<i class="fa fa-bookmark-o" aria-hidden="true"></i>
											<span>
												Mô tả: <span>{this.props.dataDetailCourse.moTa}</span>
											</span>
										</li>
										<li>
											<i class="fa fa-clock-o" aria-hidden="true"></i>
											<span>
												Ngày tạo: <span>{this.props.dataDetailCourse.ngayTao}</span>
											</span>
										</li>
										<li>
											<i class="fa fa-eye" aria-hidden="true"></i>
											<span>
												Lượt xem: <span>{this.props.dataDetailCourse.luotXem}</span>
											</span>
										</li>
										<li>
											<i class="fa fa-graduation-cap" aria-hidden="true"></i>
											<span>
												Học viên: <span>{this.props.dataDetailCourse.soLuongHocVien}</span>
											</span>
										</li>
										<li>
											<i class="fa fa-money" aria-hidden="true"></i>
											<span>
												Giá : <span>{this.state.fee}$</span>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<CoursePopular />
			</section>
		);
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getDetailCourse: id => {
			dispatch(actions.actGetDetailCourseAPI(id));
		},
		addToCart: product => {
			dispatch(actions.actAddToCart(product));
		},
	};
};
const mapStateToProps = state => {
	return {
		dataDetailCourse: state.khoaHocReducer.dataDetailCourse,
		listCourse: state.khoaHocReducer.listCourse,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);
