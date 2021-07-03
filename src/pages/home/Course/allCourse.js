import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import TableItemCourse from './TableItemCourse';
import CategoryCourse from './CategoryCourse';
import CoursePopular from '../../../components/CoursePopular';
import { NavLink } from 'react-router-dom';
class AllCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempCourseArray: [],
      keyword: '',
    };
  }
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.props.getCategory();
    this.props.getlistcourse();
    this.props.getInfoAccount();
    this.getCoursesbyParam();
  }
  componentWillReceiveProps() {
    if (this.state.tempCourseArray.length == 0) {
      this.setState({
        tempCourseArray: this.props.listCourse,
      });
    }
  }
  getCoursesbyParam = () => {
    let { search } = this.props.propsCompnent.location;
    const id = this.props.propsCompnent.match.params.id;
    let keyword = search.slice(1, search.length);
    let tempCourseArray;
    if (keyword) {
      tempCourseArray = this.props.listCourse.filter((item) => {
        return (
          item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      });
    } else {
      keyword = '';
      tempCourseArray =
        id === 'all'
          ? this.props.listCourse
          : this.props.listCourse.filter((item) => {
              return item.danhMucKhoaHoc.maDanhMucKhoahoc == id;
            });
    }
    this.setState({
      keyword,
      tempCourseArray,
    });
  };
  getCodeFromCategory = (dataFromCategory) => {
    let tempCourseArray = this.props.listCourse.filter((item) => {
      return item.danhMucKhoaHoc.maDanhMucKhoahoc == dataFromCategory;
    });
    if (!dataFromCategory) {
      this.setState({
        tempCourseArray: this.props.listCourse,
      });
    } else {
      this.setState({
        tempCourseArray,
      });
    }
  };
  handleOnChange = (event) => {
    let target = event.target;
    let keyword = target.value;
    this.setState({
      keyword,
    });
  };
  compareAZ = (a, b) => {
    const tenKhoaHocA = a.tenKhoaHoc.toUpperCase();
    const tenKhoaHocB = b.tenKhoaHoc.toUpperCase();
    let comparison = 0;
    if (tenKhoaHocA > tenKhoaHocB) {
      comparison = 1;
    } else if (tenKhoaHocA < tenKhoaHocB) {
      comparison = -1;
    }
    return comparison;
  };
  compareIncreasePrice = (a, b) => {
    const feeA = a.fee;
    const feeB = b.fee;
    let comparison = 0;
    if (feeA > feeB) {
      comparison = 1;
    } else if (feeA < feeB) {
      comparison = -1;
    }
    return comparison;
  };
  compareDecreasePrice = (a, b) => {
    const feeA = a.fee;
    const feeB = b.fee;
    let comparison = 0;
    if (feeA > feeB) {
      comparison = 1;
    } else if (feeA < feeB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  SortAZ = () => {
    let { tempCourseArray } = this.state;
    tempCourseArray.sort(this.compareAZ);
    this.setState({
      tempCourseArray,
    });
  };
  SortIncreasePrice = () => {
    let { tempCourseArray } = this.state;
    tempCourseArray.sort(this.compareIncreasePrice);
    this.setState({
      tempCourseArray,
    });
  };
  SortDecreasePrice = () => {
    let { tempCourseArray } = this.state;
    tempCourseArray.sort(this.compareDecreasePrice);
    this.setState({
      tempCourseArray,
    });
  };
  render() {
    let { tempCourseArray, keyword } = this.state;
    let { accountInfo } = this.props;
    tempCourseArray = tempCourseArray.filter((item) => {
      return (
        item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    });
    return (
      <section className='allCourse pt-5'>
        <div className='wrap-detailCourse'>
          <div
            className=' header-detailCourse'
            style={{
              backgroundImage: "url('../../img/15.jpg')",
            }}
          >
            <div
              className='overflow'
              style={{ backgroundImage: "url('../../img/bg-2.png')" }}
            ></div>
            <div className='title detail-course'>
              <span>KHÓA HỌC CỦA CHÚNG TÔI</span>
              <h4>
                <NavLink to='/home'>Trang chủ</NavLink>
                {' > '}
                <span>Khóa học của chúng tôi</span>
              </h4>
            </div>
          </div>
        </div>
        <div className='wrap-top-content'>
          <div className='tittle'>
            <div className='sort'>
              <div className='input-group sort-tool'>
                <div className='dropdown'>
                  <button
                    className='btn btn-effect dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Sắp xếp khóa học
                  </button>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <a
                      className='dropdown-item'
                      onClick={() => {
                        this.SortAZ();
                      }}
                    >
                      A-Z
                    </a>
                    <a
                      className='dropdown-item'
                      onClick={() => {
                        this.SortIncreasePrice();
                      }}
                    >
                      Giá tăng dần
                    </a>
                    <a
                      className='dropdown-item'
                      onClick={() => {
                        this.SortDecreasePrice();
                      }}
                    >
                      Giá giảm dần
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='input-group mb-3 search-bar'>
              <input
                type='text'
                className='form-control'
                placeholder='Tìm kiếm khóa học'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                defaultValue={this.state.keyword}
                onChange={(event) => {
                  this.handleOnChange(event);
                }}
              />
              <div className='input-group-append'>
                <span className='input-group-text' id='basic-addon2'>
                  <i className='fa fa-search' aria-hidden='true'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='allCourse-body'>
          <div className='row'>
            <div className='col-10'>
              <TableItemCourse
                listCourse={tempCourseArray}
                courseOfUser={
                  accountInfo ? accountInfo.chiTietKhoaHocGhiDanh : ''
                }
              />
            </div>
            <div className='col-2'>
              <div className='course-category'>
                <h4 className='title '>Danh mục khóa học</h4>

                <ul className='navbar-nav category-menu'>
                  <CategoryCourse
                    listCategoryCourse={this.props.listCategoryCourse}
                    getCodeFromCategory={this.getCodeFromCategory}
                    positionActive={this.props.propsCompnent.match.params.id}
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className='Related-Course'></div>
        </div>
        <CoursePopular />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: () => {
      dispatch(actions.actGetCategoryCourseAPI());
    },
    getlistcourse: () => {
      dispatch(actions.actGetListCourseAPI());
    },
    getInfoAccount: () => {
      dispatch(actions.actGetInfoAccount());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listCourse: state.khoaHocReducer.listCourse,
    listCategoryCourse: state.khoaHocReducer.listCategoryCourse,
    accountInfo: state.NguoiDungReducer.accountInfo,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCourse);
