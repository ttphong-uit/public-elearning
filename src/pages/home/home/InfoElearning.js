import React from 'react';

export default function InfoElearning() {
	return (
		<section className="info-elearning" style={{ backgroundImage: "url('./img/bg-info-elearning.jpg')" }}>
			<div className="ie-overflow" style={{ backgroundImage: "url('./img/bg-2.png')" }}></div>
			<div className="ie-content">
				<div className="icon-group">
					<i className="fa fa-bookmark"></i>
					<div className="name-icon">Teachers</div>
					<div className="amount">20</div>
				</div>
				<div className="icon-group">
					<i className="fa fa-book"></i>
					<div className="name-icon">Lessons</div>
					<div className="amount">100</div>
				</div>
				<div className="icon-group">
					<i className="fa fa-mortar-board"></i>
					<div className="name-icon">Students</div>
					<div className="amount">999</div>
				</div>
			</div>
		</section>
	);
}
