import {
  FLOGIN_REQUEST,
  FLOGIN_SUCCESS,
  FLOGIN_FAILURE,
  FREGISTER_REQUEST,
  FREGISTER_SUCCESS,
  FREGISTER_FAILURE,
  ULOGIN_REQUEST,
  ULOGIN_SUCCESS,
  ULOGIN_FAILURE,
  UREGISTER_REQUEST,
  UREGISTER_SUCCESS,
  UREGISTER_FAILURE,
  FETCH_FOOD_START,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
  ADD_FOOD_START,
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAILURE,
  UPDATE_FOOD_START,
  UPDATE_FOOD_SUCCESS,
  UPDATE_FOOD_FAILURE,
  DELETE_FOOD_START,
  DELETE_FOOD_SUCCESS,
  DELETE_FOOD_FAILURE,
  FETCH_FARMS_START,
  FETCH_FARMS_SUCCESS,
  FETCH_FARMS_FAILURE
} from "../actions/";

const initialState = {
  token: null,
  username: null,
  farms: [],
  users: [],
  farmers: [],
  produce: [],
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  isFetching: false,
  token: null,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FLOGIN_REQUEST:
    case ULOGIN_REQUEST:
    case FREGISTER_REQUEST:
    case UREGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FLOGIN_SUCCESS:
    case ULOGIN_SUCCESS:
    case FREGISTER_SUCCESS:
    case UREGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload,
        isFetching: false,
        error: ""
      };
    case FLOGIN_FAILURE:
    case ULOGIN_FAILURE:
    case FREGISTER_FAILURE:
    case UREGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
