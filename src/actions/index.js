import AxiosWithAuth from "../utils/axiosWithAuth";

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
  dispatch({ type: uLOGIN_REQUEST, payload: userData });

  AxiosWithAuth()
    .post("/auth/user/login")
    .then(res => dispatch({ type: ULOGIN_SUCCESS, payload: res.userData }))
    .catch(err => dispatch({ type: ULOGIN_FAILURE, payload: err }));
};

export const uRegisterRequest = userData => dispatch => {
  dispatch({ type: FREGISTER_REQUEST, payload: userData });
  AxiosWithAuth()
    .post("/auth/user/register", userData)
    .then(res => dispatch({ type: UREGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UREGISTER_FAILURE, payload: err }));
};
