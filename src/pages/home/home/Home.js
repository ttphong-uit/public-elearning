import React, { Component } from 'react';
import Intro from './Intro';
import Category from './Category';
import StepBuyCourse from './StepBuyCourse';
import ListCourse from './ListCourse';
import InfoElearning from './InfoElearning';
import Feel from './Feel';
export default class Home extends Component {
	componentDidMount() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}
	render() {
		return (
			<div>
				<Intro />
				<Category />
				<ListCourse />
				<InfoElearning />
				<StepBuyCourse />
				<Feel />
			</div>
		);
	}
}
