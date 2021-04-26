import * as actionTypes from "../constants/actionTypes";
let initialState = {
  listCourse: [],
  listCategoryCourse: [],
  dataDetailCourse: []
};

const KhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_COURSE:
      state.listCourse = action.listCourse;
      return { ...state };
    case actionTypes.GET_CATEGORY_COURSE:
      state.listCategoryCourse = action.listCategoryCourse;
      return { ...state };
    case actionTypes.GET_DETAIL_COURSE:
      state.dataDetailCourse = action.dataDetailCourse;
      return { ...state };
    default:
      return { ...state };
  }
};

export default KhoaHocReducer;
