import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getLogout } from '../../actions';
const HeaderComp=()=>{

  const dispatch = useDispatch();
  const isLoggIn=useSelector((state)=>state.isLoggedIn);
  const isLoggOut=useSelector((state)=>state.isLoggedOut);
  const isAdmin=useSelector((state)=>state.isAdmin);
  // useEffect(()=>{
  //   dispatch(getLogout());
  // },[isLoggIn]);
  const history=useHistory();
  const handleLogout=async()=>{
    await dispatch(getLogout());
      history.push("/login");
      // dispatch(getLogout());
  }
  const handleReview=()=>{
    if(isAdmin)
    {
      history.push("/review/add");
    }
    else{
      history.push("/review");
    }
  }
  const handleEmployee=()=>{
    
      history.push("/employees");
    
  }

  return(
    isLoggIn?
  <div>
    {console.log("header render")}
   <ul class="nav">
   {(() => {
        if (isAdmin) {
          return (
            <li onClick={handleEmployee}  class="nav-item"><a class="nav-link active" aria-current="page" >Employee</a></li>
          )
        } 
      })()}
 
  
  <li  onClick={handleReview} class="nav-item"><a class="nav-link active" aria-current="page" >Reviews</a></li>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button onClick={handleLogout} class="btn btn-outline-success" type="button">LogOut</button>
  </div>
  </ul>

  </div>
  :null
    );
}
export default HeaderComp;