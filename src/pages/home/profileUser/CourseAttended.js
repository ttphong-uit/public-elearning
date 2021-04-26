import React, { Component } from 'react'
import * as actions from "../../../redux/actions/index";
import { connect } from "react-redux";
import ItemCourseOfUser from '../../../components/ItemCourseOfUser';



class CourseAttended extends Component {
  componentDidMount() {
    this.props.getListCourse();
    this.props.Reloadrender();
  }

  renderDetailCourseAttended = () => {
    let { chiTietKhoaHocGhiDanh } = this.props.accountInfo;
    return this.props.listCourse.filter(item => {
      let index = chiTietKhoaHocGhiDanh.findIndex(i => {
        return i.maKhoaHoc === item.maKhoaHoc
      });
      return index !== -1
    }).map((item, index) => {
      
      return (
      <ItemCourseOfUser key={index} course={item} accountInfo={this.props.accountInfo} />
      )
    })
  }
  render() {
    
    return (
      <section className="Course-Attended">
        <div className="list-cart">
          <div className="content">
            <div className="header-list-cart">
              <p>KHÓA HỌC</p>
              <p>GIÁ TRỊ</p>
            </div>
            <div className="mct-list-cart">
            {this.props.accountInfo.chiTietKhoaHocGhiDanh ? 
              this.props.accountInfo.chiTietKhoaHocGhiDanh.length ? this.renderDetailCourseAttended() : <div className="message">Bạn chưa đăng kí khóa học nào</div>
             : ""}
             </div>
          </div>
        </div>

      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(actions.actGetListCourseAPI());
    },
    Reloadrender: () => {
      dispatch(actions.actGetInfoAccount());
    }
  }
}

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseAttended);
