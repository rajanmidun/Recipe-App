import {
  GET_ITEMS,
  GET_ITEM,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_LOADING
} from "../types";


export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        laoding: true,
      }
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
}