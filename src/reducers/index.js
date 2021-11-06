import {GET_EMPLOYEE,UPDATE_EMPLOYEE,DELETE_EMPLOYEE,ADD_EMPLOYEE,GET_USER,ADD_REVIEW,LOGGED_IN,LOGG_IN,GET_REVIEW,SUBMIT_REVIEW,LOG_OUT, SET_ADMIN,SET_EMPLOYEE} from '../constants/actionTypes'
const reducers= (state={isAdmin:false,isEmployee:false,isLoggedIn:false,isLoggedOut:true}, action) => {
    switch (action.type) {
        case GET_EMPLOYEE:
          return {...state,employeeData:action.payload};
        case GET_USER:
          return {...state,userData:action.payload}
        case GET_REVIEW:
            return {...state,reviewData:action.payload}
        case UPDATE_EMPLOYEE:
            return state;
        case DELETE_EMPLOYEE:
            return state;
        case ADD_EMPLOYEE:
            return state;
        case  ADD_REVIEW:
          return state;
        case LOGGED_IN:
          return {...state,isLoggedIn:true,isLoggedOut:false};
        case LOGG_IN:
          return {...state,isLoggedIn:true,isLoggedOut:false};
        case SUBMIT_REVIEW:
            return state;
        case LOG_OUT:
          return {...state,isLoggedIn:false,isLoggedOut:true,isAdmin:false};
        case SET_ADMIN:
          return {...state,isAdmin:true,isEmployee:false};
        case SET_EMPLOYEE:
          return {...state,isEmployee:true,isAdmin:false};

          default:
              return state;
}
};
export default reducers;