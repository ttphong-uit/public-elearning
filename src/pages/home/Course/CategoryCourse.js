import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
export default class CategoryCourse extends Component {
	componentDidMount() {}
	renderCategoryHTML = () => {
		return this.props.listCategoryCourse.map((item, index) => {
			return (
				<li key={index} className="nav-item">
					<a
						className={classnames('category-items', 'nav-link', {
							active: item.maDanhMuc === this.props.positionActive,
						})}
						onClick={() => {
							this.props.getCodeFromCategory(item.maDanhMuc);
						}}
						data-toggle="tab"
					>
						{item.tenDanhMuc}
					</a>
				</li>
			);
		});
	};
	render() {
		return (
			<Fragment>
				<ul className="nav nav-tabs " id="myTab" role="tablist">
					<li className="nav-item">
						<a
							className={classnames('category-items', 'nav-link', {
								active: this.props.positionActive === 'all',
							})}
							onClick={() => {
								this.props.getCodeFromCategory();
							}}
							data-toggle="tab"
						>
							Tất cả khóa học
						</a>
					</li>
					{this.renderCategoryHTML()}
				</ul>
			</Fragment>
		);
	}
}
