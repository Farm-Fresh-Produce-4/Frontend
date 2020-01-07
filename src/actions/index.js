import { AxiosWithAuth } from "../utils/axiosWithAuth";

//LOGIN & REGISTER ACTIONS

//Farmer login and register
export const FLOGIN_REQUEST = "FLOGIN_REQUEST";
export const FLOGIN_SUCCESS = "FLOGIN_SUCCESS";
export const FLOGIN_FAILURE = "FLOGIN_FAILURE";
export const FREGISTER_REQUEST = "FREGISTER_REQUEST";
export const FREGISTER_SUCCESS = "FREGISTER_SUCCESS";
export const FREGISTER_FAILURE = "FREGISTER_FAILURE";

export const fLoginRequest = userData => dispatch => {
  dispatch({ type: FLOGIN_REQUEST, payload: userData });

  AxiosWithAuth()
    .post("/auth/farmer/login")
    .then(res => dispatch({ type: FLOGIN_SUCCESS, payload: res.userData }))
    .catch(err => dispatch({ type: FLOGIN_FAILURE, payload: err }));
};

export const fRegisterRequest = userData => dispatch => {
  dispatch({ type: FREGISTER_REQUEST, payload: userData });
  AxiosWithAuth()
    .post("/auth/farmer/register", userData)
    .then(res => dispatch({ type: FREGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FREGISTER_FAILURE, payload: err }));
};

//User Login and Register
export const ULOGIN_REQUEST = "ULOGIN_REQUEST";
export const ULOGIN_SUCCESS = "ULOGIN_SUCCESS";
export const ULOGIN_FAILURE = "ULOGIN_FAILURE";
export const UREGISTER_REQUEST = "UREGISTER_REQUEST";
export const UREGISTER_SUCCESS = "UREGISTER_SUCCESS";
export const UREGISTER_FAILURE = "UREGISTER_FAILURE";

export const uLoginRequest = userData => dispatch => {
  dispatch({ type: ULOGIN_REQUEST, payload: userData });

  AxiosWithAuth()
    .post("/auth/users/login")
    .then(res => dispatch({ type: ULOGIN_SUCCESS, payload: res.userData }))
    .catch(err => dispatch({ type: ULOGIN_FAILURE, payload: err }));
};

export const uRegisterRequest = userData => dispatch => {
  dispatch({ type: FREGISTER_REQUEST, payload: userData });
  AxiosWithAuth()
    .post("/auth/users/register", userData)
    .then(res => dispatch({ type: UREGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UREGISTER_FAILURE, payload: err }));
};

//FARMER SHOP ACTIONS
export const FETCH_FOOD_START = "FETCH_FOOD_START";
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";

export const ADD_FOOD_START = "ADD_FOOD_START";
export const ADD_FOOD_SUCCESS = "ADD_FOOD_SUCCESS";
export const ADD_FOOD_FAILURE = "ADD_FOOD_FAILURE";

export const UPDATE_FOOD_START = "UPDATE_FOOD_START";
export const UPDATE_FOOD_SUCCESS = "UPDATE_FOOD_START";
export const UPDATE_FOOD_FAILURE = "UPDATE_FOOD_FAILURE";

export const DELETE_FOOD_START = "DELETE_FOOD_START";
export const DELETE_FOOD_SUCCESS = "DELETE_FOOD_SUCCESS";
export const DELETE_FOOD_FAILURE = "DELETE_FOOD_FAILURE";

//GET
export const fetchFood = () => dispatch => {
  dispatch({ type: FETCH_FOOD_START });

  AxiosWithAuth()
    .get("/placeholder")
    .then(res => dispatch({ type: FETCH_FOOD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FOOD_FAILURE, payload: err }));
};

//POST
export const addFood = newFood => dispatch => {
  dispatch({ type: ADD_FOOD_START });
  AxiosWithAuth("/placeholder")
    .post(res => dispatch({ type: ADD_FOOD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FOOD_FAILURE, payload: err }));
};

//PUT
export const updateFood = (updatedFood, id) => dispatch => {
  dispatch({ type: UPDATE_FOOD_START });
  AxiosWithAuth(`/placeholder/${id}`, updatedFood)
    .post(res => dispatch({ type: UPDATE_FOOD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_FOOD_FAILURE, payload: err }));
};

//DELETE
export const deleteFood = id => dispatch => {
  dispatch({ type: DELETE_FOOD_START });
  AxiosWithAuth(`/placeholder/${id}`)
    .post(res => dispatch({ type: DELETE_FOOD_SUCCESS, payload: res.id }))
    .catch(err => dispatch({ type: DELETE_FOOD_FAILURE, payload: err }));
};

//USER SHOPPING ACTIONS
