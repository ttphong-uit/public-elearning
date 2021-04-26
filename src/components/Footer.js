import React from 'react';

export default function Footer() {
	return (
		<footer className="footer text-center" style={{ backgroundImage: " url('../../../img/17.jpg')" }}>
			<div className="overflow" />
			<div className="container">
				<div className="main-content">
					<div className="logo-title">
						<img src="../../../img/logo.png" className="img-fluid" />
						<h1>Elearning</h1>
					</div>
					<div className="row">
						<div className="col-4 chinh-sach">
							<h5>Chính sách &amp; quy định</h5>
							<ol className="list-unstyled">
								<li>
									<a href="#">Thỏa thuận sử dụng</a>
								</li>
								<li>
									<a href="#">Quy chế hoạt động</a>
								</li>
								<li>
									<a href="#">Chính sách bảo mật</a>
								</li>
								<li>
									<a href="#">Quyền lợi thành viên</a>
								</li>
							</ol>
						</div>
						<div className="lien-ket col-4">
							<h5>Liên kết</h5>
							<div className="d-flex justify-content-center">
								<a href="https://www.facebook.com/profile.php?id=100004474485332" className="facebook">
									<i className="fa fa-facebook" aria-hidden="true" />
								</a>
								<a href="https://www.youtube.com/user/myclassvn" className="youtube">
									<i className="fa fa-youtube" aria-hidden="true" />
								</a>
							</div>
						</div>
						<div className="col-4 lien-he text-left">
							<h5 className="d-flex justify-content-center">Liên hệ</h5>
							<ol className="list-unstyled">
								<li>
									<i className="fa fa-envelope-o" aria-hidden="true">
										<span>congduc1199@gmail.com</span>
									</i>
								</li>
								<li>
									<i className="fa fa-envelope-o" aria-hidden="true">
										<span>hero.keyboard30@gmail.com</span>
									</i>
								</li>
								<li>
									<i className="fa fa-phone" aria-hidden="true">
										<span>0359070925</span>
									</i>
								</li>
								<li>
									<i className="fa fa-phone" aria-hidden="true">
										<span>0972100850</span>
									</i>
								</li>
							</ol>
						</div>
					</div>
				</div>
				<div className="line-mid" />
				<div className="second-content d-flex justify-content-between">
					<a className="d-inline-block" width={150}>
						<img src="https://hocmai.vn/theme/new2/images/congthuong.png" className="img-fluid" />
					</a>
					<div className="text-right">
						<p>SẢN PHẨM ĐƯỢC TẠO BỞI CÔNG ĐỨC &amp; THANH PHONG</p>
						<p>ĐỊA CHỈ: 82 UNG VĂN KHIÊM - BÌNH THẠNH, TP.HCM</p>
						<p>2019 © PDElearning. ALL RIGHTS RESERVED.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
