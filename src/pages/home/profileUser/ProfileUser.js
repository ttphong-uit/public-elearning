import React, { Component } from 'react';
import * as actions from '../../../redux/actions/index';
import { connect } from 'react-redux';
import AccountInfo from './AccountInfo';
import CourseAttended from './CourseAttended';
class ProfileUser extends Component {
	componentDidMount() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
		this.props.getInfoAccount();
	}
	render() {
		let { accountInfo } = this.props;
		return (
			<section className="profileUser">
				<div className="wrap-profileUser">
					<div className="row m-0 all-table">
						<div className="col-3 profile-navigation-bar">
							<div className="border-avatar">
								<div className="profile-avatar">
									<img src="http://bootdey.com/img/Content/User_for_snippets.png" />

								</div>
								<p className="user-name">{accountInfo.hoTen}</p>
								<div className="bottom-line"></div>
							</div>

							{/* Nav tabs */}
							<ul className="nav nav-tabs container profile-list-menu">
								<li className="nav-item">
									<a className="nav-link active" data-toggle="tab" href="#home">
										Thông tin tài khoản
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#menu1">
										Khóa học ghi danh
									</a>
								</li>
							</ul>
						</div>
						<div className="col-9 profile-infomation-table">
							<div className="profile-table-menu">
								{/* Tab panes */}
								<div className="tab-content">
									<div className="tab-pane container active" id="home">
										<div className="Table-header">
											<h3>Thông tin tài khoản</h3>
											<p>Xem thông tin hoặc chỉnh sửa thông tin của bạn</p>
											<div className="bottom-line"></div>
										</div>
										<div className="Table-Content">
											{accountInfo ? <AccountInfo accountInfo={accountInfo} /> : ''}
										</div>
									</div>
									<div className="tab-pane container fade" id="menu1">
										<div className="Table-header">
											<h3>Khóa học đã ghi danh</h3>
											<p>Thông tin về khóa học bạn đã ghi danh</p>
											<div className="bottom-line"></div>
										</div>
										<div className="Table-Content">
											<CourseAttended accountInfo={accountInfo} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getInfoAccount: () => {
			dispatch(actions.actGetInfoAccount());
		},
	};
};
const mapStateToProps = state => {
	return {
		accountInfo: state.NguoiDungReducer.accountInfo,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);
