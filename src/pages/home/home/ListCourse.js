import * as actions from '../../../redux/actions/index';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import KhoaHoc from '../../../components/KhoaHoc';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';
class ListCourse extends Component {
	componentDidMount() {
		this.props.getListCourse();
		this.props.getInfoAccount();
	}
	componentWillReceiveProps() {
		$(document).ready(() => {
			this.efflectLoadCourse();
		});
	}
	renderListCourse = () => {
		let { listCourse, accountInfo } = this.props;
		if (listCourse.length) {
			return listCourse.slice(0, 6).map((item, index) => {
				return (
					<div className="item-course" key={index}>
						<KhoaHoc course={item} courseOfUser={accountInfo ? accountInfo.chiTietKhoaHocGhiDanh : ''} />
					</div>
				);
			});
		}
	};
	efflectLoadCourse = () => {
		let lengthItemCourse = $('.item-course').length;
		let x = 3;
		$('#showLess').hide();
		$('.item-course:lt(' + x + ')').show();
		$('#loadMore').click(() => {
			x = x + 3 <= lengthItemCourse ? x + 3 : lengthItemCourse;
			$('.item-course:lt(' + x + ')').slideDown();
			$('.item-course:lt(' + x + ')').show('slow');
			$('#showLess').show();
			x === lengthItemCourse ? $('#loadMore').hide() : $('#loadMore').show();
		});
		$('#showLess').click(() => {
			x = x - 3 <= 0 ? 3 : x - 3;
			$('.item-course')
				.not(':lt(' + 3 + ')')
				.slideUp();
			$('.item-course')
				.not(':lt(' + 3 + ')')
				.hide('slow');
			window.scroll({
				top: $('.list-course').offset().top - 50,
				left: 0,
				behavior: 'smooth',
			});
			$('#showLess').hide();
			$('#loadMore').show();
		});
	};
	render() {
		return (
			<section className="list-course">
				<h3 className="title">Our Top Courses</h3>
				<p className="subtitle">
					Join over 100 instructors who use Teachable to share their knowledge.
					<br /> Easily register for an online course
				</p>
				<div className="lc-main-content">
					<div className="lc-content">{this.renderListCourse()}</div>
					<div className="lc-btn-group">
						<button className="btn--blue btnn" id="loadMore">
							SHOWN MORE <i className="fa fa-angle-double-down"></i>
						</button>
						<button className="btn--blue btnn" id="showLess">
							SHOWN LESS <i className="fa fa-angle-double-up"></i>
						</button>
						<NavLink className="btn--purple btnn" to="/home/courses/all">
							SHOWN ALL<i className="fa fa-angle-double-right"></i>
						</NavLink>
					</div>
				</div>
			</section>
		);
	}
}
const mapStateTopProps = state => {
	return {
		listCourse: state.khoaHocReducer.listCourse,
		accountInfo: state.NguoiDungReducer.accountInfo,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getListCourse: () => {
			dispatch(actions.actGetListCourseAPI());
		},
		getInfoAccount: () => {
			dispatch(actions.actGetInfoAccount());
		},
	};
};
export default connect(mapStateTopProps, mapDispatchToProps)(ListCourse);
