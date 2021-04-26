import React, { Component, Fragment } from 'react';
import ItemCourse from '../../../components/ItemCourse';
import classnames from 'classnames';
export default class TableItemCourse extends Component {
	renderPageNumber = tempArray => {
		return tempArray.map((item, index) => {
			return (
				<li key={index} className="nav-item">
					<a
						className={classnames('nav-link', {
							active: index === 0,
						})}
						data-toggle="tab"
						href={`#menu${index}`}
					>
						{item}
					</a>
				</li>
			);
		});
	};
	renderTableCourse = tempArray => {
		let { listCourse, courseOfUser } = this.props;
		return tempArray.map((item, index) => {
			return (
				<div
					key={index}
					className={classnames('tab-pane fade', {
						show: index === 0,
						active: index === 0,
					})}
					id={'menu' + index}
				>
					<div className="row">
						{listCourse.slice(index * 8, index * 8 + 8).map((item, i) => {
							return (
								<div className="col-3 " key={i}>
									<ItemCourse
										course={item}
										id={index * 10 + i}
										courseOfUser={courseOfUser ? courseOfUser : ''}
									/>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	};
	tempArray = () => {
		let { listCourse } = this.props;
		let pagenumber;
		pagenumber =
			listCourse.length % 8 === 0 ? Math.floor(listCourse.length / 8) : Math.floor(listCourse.length / 8) + 1;
		let tempArray = [];
		for (let i = 0; i < pagenumber; i++) {
			tempArray.push(i);
		}
		return tempArray;
	};
	render() {
		return (
			<Fragment>
				<div className="tab-content" id="myTabContent">
					{this.renderTableCourse(this.tempArray())}
				</div>

				<div className="adjust-center-pagesize">
					<ul className="nav nav-tabs " id="myTab" role="tablist">
						{this.renderPageNumber(this.tempArray())}
					</ul>
				</div>
			</Fragment>
		);
	}
}
