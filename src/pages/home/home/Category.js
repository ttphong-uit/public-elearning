import React, { Component } from "react";
import ItemCategory from "../../../components/ItemCategory";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";
class Category extends Component {
  componentDidMount() {
    this.props.getListCategory();
  }
  renderCategoryHTML = () => {
    if (this.props.listCategory.length) {
      return this.props.listCategory.map((item, index) => (
        <ItemCategory key={index} hinhAnh={index + 1} category={item} />
      ));
    }
  };
  render() {
    return (
      <section className="category">
        <div className="wallpaper">
          <img src="./img/bg-3.png" />
        </div>

        <h3 className="title">Our category</h3>
        <div className="container">
          <div className="d-flex justify-content-around">
            {this.renderCategoryHTML()}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    listCategory: state.khoaHocReducer.listCategoryCourse
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListCategory: () => {
      dispatch(actions.actGetCategoryCourseAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
