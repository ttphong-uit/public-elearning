import React, { useEffect } from "react";
import * as actions from '../../../redux/actions/index';
import { connect } from 'react-redux';
import userManagementModal from "./../../../components/widthmodal/userManagementModal";
import widthmodal from "./../../../components/widthmodal/widthmodal"
let FormsModal = widthmodal(userManagementModal)
const UsersManagement = (props) => {
  useEffect(() => {
    props.getUserList();
  }, []);
  const renderUserManagementHTML = () => {
    let { userList } = props
    return userList.map((item, index) => {
      return <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.taiKhoan}</td>
        <td>{item.hoTen}</td>
        <td>{item.email}</td>
        <td>{item.soDt}</td>
        <td>{item.maLoaiNguoiDung}</td>
        <td><button className="bttn btn--blue" data-toggle="modal" data-target="#modelId">
          <i class="fa fa-edit" aria-hidden="true" ></i>
        </button>
          <button className="bttn btn--purple">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    })

  }
  return <div>
    <section classname="user-management">
      <div className="user-management-tittle">
        <h3 className="title">
          <i class="fa fa-users" aria-hidden="true"></i>
          USER MANAGEMENT
        </h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th > STT</th>
            <th > TÊN TÀI KHOẢN</th>
            <th > HỌ TÊN</th>
            <th > EMAIL</th>
            <th > SỐ ĐT</th>
            <th > LOẠI</th>
            <th>THAO TÁC</th>
          </tr>
        </thead>
        <tbody>
          {renderUserManagementHTML()}
        </tbody>
      </table>
    </section>
    <FormsModal />
  </div>

};
const mapDispatchToProps = dispatch => {
  return {
    getUserList: () => {
      dispatch(actions.actGetListUserAPI())
    }
  }
}
const mapStateToProps = state => {
  return {
    userList: state.NguoiDungReducer.userList
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersManagement)
