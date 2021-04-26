import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { NavLink } from 'react-router-dom';
class Intro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
		};
	}
	componentDidMount() {
		this.props.getListCourse();
	}
	scrollDown = () => {
		window.scroll({
			top: 625,
			left: 0,
			behavior: 'smooth',
		});
	};
	handleOnChange = event => {
		let { value } = event.target;
		this.setState({
			keyword: value,
		});
	};
	renderContenSearch = () => {
		return this.state.keyword
			? this.props.listCourse
					.filter(item => {
						return item.tenKhoaHoc.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
					})
					.map((item, index) => {
						return (
							<NavLink to={'/home/detail-course/' + item.maKhoaHoc} key={index}>
								<span>{item.tenKhoaHoc}</span>
								<span>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
							</NavLink>
						);
					})
			: '';
	};
	render() {
		return (
			<section className="intro">
				<div className="overflow"></div>
				<img src="./img/1.jpg" />
				<div className="content">
					<div>
						<h3 className="head-title">
							Getting started with <b>PD-Elearning</b>
						</h3>
						<p className="head-subtitle">
							We pride ourselves on providing the most up-to-date content for
							<br />
							our students to learn each course
						</p>
						<div className="form-group">
							<div className="search">
								<input
									type="text"
									placeholder="What course are you looking for?"
									className="form-control"
									onKeyUp={this.handleOnChange}
								></input>
								<div className="content-search">{this.renderContenSearch()}</div>
							</div>
							<NavLink to={`/home/courses/all?${this.state.keyword}`} className="btn--purple bttn">
								SEARCH
							</NavLink>
						</div>
					</div>
				</div>
				<div className="arrow-down" onClick={this.scrollDown}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return {
		listCourse: state.khoaHocReducer.listCourse,
	};
};
const mapDispatchToporps = dispatch => {
	return {
		getListCourse: () => {
			dispatch(actions.actGetListCourseAPI());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToporps)(Intro);
