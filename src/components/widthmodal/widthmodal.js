import React from 'react';
import { connect } from 'react-redux';

export default function widthmodal(Component) {
	return function(props) {
		const handleNameForm = () => {
			let nameForm = '';
			switch (props.nameForm) {
				case 'THEM_KHOA_HOC':
					nameForm = 'Thêm khóa học';
					break;
				case 'SUA_KHOA_HOC':
					nameForm = 'Sửa khóa học';
					break;
				case 'THEM_NGUOI_DUNG':
					nameForm = 'Thêm người dùng';
					break;
				case 'SUA_NGUOI_DUNG':
					nameForm = 'Sửa người dùng';
					break;
				default:
					break;
			}
			return nameForm;
		};
		return (
			<div>
				<div
					className="modal fade"
					id="modelId"
					tabIndex={-1}
					role="dialog"
					aria-labelledby="modelTitleId"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">{handleNameForm().toUpperCase()}</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<Component nameForm={props.nameForm} />
						</div>
					</div>
				</div>
			</div>
		);
	};
}
