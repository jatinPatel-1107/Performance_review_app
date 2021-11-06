import { GET_EMPLOYEE,UPDATE_EMPLOYEE,DELETE_EMPLOYEE,ADD_EMPLOYEE,GET_USER,ADD_REVIEW,LOGGED_IN,GET_REVIEW,LOGG_IN,SUBMIT_REVIEW,LOG_OUT,SET_ADMIN,SET_EMPLOYEE} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getUser = () => async (dispatch) => {
  try {
    const  data  = await api.fetchUser();
     console.log(data);
    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getReview = () => async (dispatch) => {
  try {
    console.log("fetching review");
    const {data}  = await api.fetchReview();
    console.log("fetched review");
     console.log(data);
     dispatch({ type: GET_REVIEW, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getEmployee = () => async (dispatch) => {
    try {
      const  data  = await api.fetchEmployee();
       console.log(data);
      dispatch({ type: GET_EMPLOYEE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateEmployee = (updateData) => async (dispatch) => {
    try {
      const  {data}  = await api.fetchUpdateEmployee(updateData);
       console.log({data});
      dispatch({ type: UPDATE_EMPLOYEE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const deleteEmployee = (id) => async (dispatch) => {
    try {
      const  data  = await api.fetchDeleteEmployee(id);
       console.log(data);
       dispatch({ type: DELETE_EMPLOYEE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const AddEmployee = (addData) => async (dispatch) => {
    try {
      const  data  = await api.fetchAddEmployee(addData);
       console.log(data);
       dispatch({ type: ADD_EMPLOYEE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const AddReview = (addData) => async (dispatch) => {
    try {
      const  data  = await api.fetchAddReview(addData);
       console.log(data);
       dispatch({ type: ADD_REVIEW, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getLoggedIn = (addData) => async (dispatch) => {
    try {
      console.log("dispatch logged in" );
      const  data  = await api.fetchLoggedIn(addData);
       console.log(data);
       dispatch({ type: LOGGED_IN, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getLoggIn = () => async (dispatch) => {
    try {
      console.log("dispatch logg in" );
      const  data  = await api.fetchLoggIn();
       console.log(data);
       dispatch({ type: LOGG_IN, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getLogout = () => async (dispatch) => {
    try {
      console.log("dispatch logout" );
      const  data  = await api.fetchLogout();
       console.log(data);
       dispatch({ type: LOG_OUT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const submitReview = (Data) => async (dispatch) => {
    try {
      const  data  = await api.fetchSubmitReview(Data);
       console.log(data);
      dispatch({ type: SUBMIT_REVIEW, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const setAdmin = () => (dispatch) => {
    try {
      dispatch({ type: SET_ADMIN });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const setEmployee = () => (dispatch) => {
    try {
      dispatch({ type: SET_EMPLOYEE });
    } catch (error) {
      console.log(error.message);
    }
  };
  