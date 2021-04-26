import React from 'react';
import { NavLink } from 'react-router-dom';
export default function PageNotFound() {
	return (
		<section className="page_404">
			<div className="container">
				<div className="row">
					<div className="four_zero_four_bg">
						<h1 className="text-center ">404</h1>
					</div>
					<div className="contant_box_404">
						<h3 className="h2">Look like you're lost</h3>
						<p>the page you are looking for not avaible!</p>
						<NavLink to="/home" className="link_404 pulse">
							{' '}
							Go to Home
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
}
