import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {getEmployee,getUser,getLoggedIn,getReview,getLoggIn,setAdmin,setEmployee } from '../../actions/index'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
 
const Login = () => {
  const userData=useSelector((state)=>state.userData);
  const [id,setId]=useState(0);
  const dispatch=useDispatch();
  const history=useHistory();
  useEffect(()=>{
    dispatch(getUser());
  },[]);

  // console.log(employData.data); 
 if(userData===undefined){
   return null;
 }
 else{
  var arr=userData.data;
   console.log(arr);
 }
 const handleLogin=async()=>{
   console.log("handleLogin");
   if(id==0){
   return;
   }
   let info=arr.filter((dat)=>dat.emp_id==id);
   console.log(info);
   if(info==undefined)
   {
     return null;
   }
   else{
   if(info[0].role==1)
   {
     await dispatch(setAdmin());
     await dispatch(getLoggedIn({username:id,password:"1411"}));
     await dispatch(getLoggIn());
     history.push("/employees");
    //  dispatch(getLoggedIn({username:id,password:"1411"}));
    // dispatch(getLoggIn());
   }
   else{
     console.log(id);
    await dispatch(setEmployee());
    await dispatch(getLoggedIn({username:id,password:"1411"}));
    await dispatch(getLoggIn());
    await dispatch(getReview());
     history.push("/review");
    //  dispatch(getLoggedIn({username:id,password:"1411"}));
    //  dispatch(getLoggIn());
    //  dispatch(getReview());
   }
 
  }
 }
  
  return (
    userData?
    <div class="card">
      {console.log("login-render")}
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <select onChange={(e)=>setId(e.target.value)} class="form-select" aria-label="Default select example">
                    <option defaultValue>Select User</option>
                    {arr.map(fbb =>
                        <option key={fbb.emp_id} value={fbb.emp_id}>{`${fbb.name}(${fbb.emp_id})/${fbb.role==1?"Admin":"Employee"}   `}</option>
                      )};
                    </select>
                    {/* <Link to="/review"> */}
                   <button onClick={handleLogin}  class="btn btn-secondary" type="button">Login</button>
                   {/* </Link> */}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </div> : null
  );
}

export default Login
