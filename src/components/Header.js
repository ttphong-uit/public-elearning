import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import classnames from 'classnames';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true,
			homePage: window.location.pathname == '/' || window.location.pathname == '/home',
			updateCart: false,
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	componentWillReceiveProps() {
		this.handleAddtoCart();
	}
	handleScroll = () => {
		const { prevScrollpos } = this.state;
		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;
		const homePage =
			currentScrollPos == 0 && (window.location.pathname == '/' || window.location.pathname == '/home');
		this.setState({
			prevScrollpos: currentScrollPos,
			visible,
			homePage,
		});
	};
	handleAddtoCart = () => {
		this.setState({
			visible: true,
			updateCart: true,
		});
		setTimeout(() => {
			this.setState({
				updateCart: false,
			});
		}, 1000);
	};
	renderCart = () => {
		if (this.props.listCart.length) {
			return this.props.listCart.map((item, index) => {
				return (
					<div key={index} className="item-cart">
						<div className="d-flex justify-content-start">
							<img src={item.course.hinhAnh} />
							<div className="ct-item-cart ">
								<h5>{item.course.tenKhoaHoc}</h5>
								<p>{item.course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
								<p className="fee">${item.course.fee}</p>
							</div>
						</div>
						<div
							onClick={() => {
								this.props.deleteIntoCart(item.course.maKhoaHoc);
							}}
						>
							<i className="fa fa-times"></i>
						</div>
					</div>
				);
			});
		}
	};
	handleLogout = () => {
		this.props.handleOnLogout();
	};
	totalCart = () => {
		return this.props.listCart.reduce((rs, item) => {
			return rs + item.course.fee;
		}, 0);
	};
	handleLogout = () => {
		localStorage.removeItem('user');
		window.location.replace('/');
	};
	savePrevPage = () => {
		localStorage.setItem('prevPage', JSON.stringify(window.location.pathname));
	};
	renderAccount = () => {
		if (localStorage.getItem('user')) {
			let account = JSON.parse(localStorage.getItem('user'));
			return (
				<div className="account">
					<div className="account-img">
						<img src="http://bootdey.com/img/Content/User_for_snippets.png" />
						<span>{account.taiKhoan}</span>
					</div>
					<div className="account-content">
						<NavLink to="/home/profile">
							<i className="fa fa-user"></i> Thông tin tài khoản
						</NavLink>
						<p onClick={this.handleLogout}>
							<img src="../../../img/logout.png" /> Đăng xuất
						</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="account">
					<NavLink className="btn--blue bttn " to="/home/dang-nhap" onClick={this.savePrevPage}>
						SIGN IN
					</NavLink>
					<NavLink className="signup btn--black bttn " to="/home/dang-ky">
						SIGN UP
					</NavLink>
				</div>
			);
		}
	};
	goTop = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};
	render() {
		return (
			<header
				className={classnames('header', {
					'navbar--hidden': !this.state.visible,
					'header-home': this.state.homePage,
				})}
			>
				<nav className="navbar navbar-expand-sm">
					<NavLink className="navbar-brand" to="/home" onClick={this.goTop}>
						<img src="../../../img/logo.png" className="img-fluid" />
						<h1>Elearning</h1>
					</NavLink>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									to="/home"
									onClick={this.goTop}
									activeClassName="active"
									exact
								>
									HOME
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/home/courses/all" onClick={this.goTop}>
									COURSE
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/home/home-blog" onClick={this.goTop}>
									BLOG
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/home/home-about" onClick={this.goTop}>
									ABOUT
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="navbar-right ml-auto">
						<div className="cart">
							<i className="fa fa-shopping-cart" aria-hidden="true"></i>
							<div
								className={classnames('amount', {
									updateCart: this.state.updateCart,
								})}
							>
								<span>{this.props.listCart.length}</span>
							</div>
							<div className="mct-cart">
								{this.props.listCart.length === 0 ? (
									<div className="no-course">Không có khóa học nào trong giỏ hàng</div>
								) : (
										<Fragment>
											<div className="total">TOTAL: ${this.totalCart()}</div>
											<div className="ct-cart">{this.renderCart()}</div>
											<div className="d-flex justify-content-around">
												<NavLink className="btn--blue" to="/home/detail-cart" onClick={this.goTop}>
													ĐI TỚI GIỎ HÀNG
											</NavLink>
												<button className="btn--purple">THANH TOÁN</button>
											</div>
										</Fragment>
									)}
							</div>
						</div>
						{this.renderAccount()}
					</div>
				</nav>
			</header>
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
		deleteIntoCart: maKhoaHoc => {
			dispatch(actions.actDeleteIntoCart(maKhoaHoc));
		},
		handleOnLogout: () => {
			dispatch(actions.actLogOut());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
