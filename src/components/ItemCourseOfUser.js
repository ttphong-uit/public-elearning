import React, { Component } from "react";
import * as actions from "../redux/actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class ItemCourseOfUser extends Component {

  render() {
    let { course } = this.props;

    return (
      <section className="item-course-of-user">
        <div className="d-flex justify-content-between align-items-center">
          <div className="content-left d-flex justify-content-start align-items-center">
            <img src={course.hinhAnh} />
            <div className="mct-item-course-of-user">
              <h5>
                <NavLink to={`/home/detail-course/${course.maKhoaHoc}?${course.fee}`}>Detail</NavLink>
                {course.tenKhoaHoc}
              </h5>
              <p>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            </div>
          </div>
          <div className="content-right d-flex justify-content-end align-items-center">
            <p className="fee">${course.fee}</p>
            <div
              onClick={() => {
                window.location.pathname === "/home/profile" ?
                  this.props.cancelAttendCourse({ maKhoaHoc: course.maKhoaHoc, taiKhoan: this.props.accountInfo.taiKhoan })
                  : this.props.deleteIntoCart(course.maKhoaHoc)
              }
              }
            >
              <i className="fa fa-trash"></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteIntoCart: maKhoaHoc => {
      dispatch(actions.actDeleteIntoCart(maKhoaHoc));
    },
    cancelAttendCourse: data => {
      dispatch(actions.actCancelAttendCourse(data))
    }
  };
};
export default connect(null, mapDispatchToProps)(ItemCourseOfUser);
