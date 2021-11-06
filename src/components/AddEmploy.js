import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { AddEmployee } from '../actions';
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const AddEmploy = () => {
  const [name,setName]=useState("");
  const [user,setUser]=useState("2");
  const [email,setEmail]=useState("");
  const [empId,setEmpId]=useState("");
  const dispatch = useDispatch();
  const history=useHistory();
  const handleClick=async()=>{
    console.log("add employ");
    await dispatch(AddEmployee({emp_id:parseInt(empId),name:name,email:email,role:parseInt(user)}));
     history.push(`/employee/${empId}`);
     
  }


  console.log(name);
  console.log(user);
    return (
      
      <>
      
       <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
        <CRow className="justify-content-center">
          <CCol>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
       <div  class="mb-3">
           <h5> Add New Employee </h5>
        <input value={empId} onChange={(e)=>setEmpId(e.target.value)}  class="form-control" id="exampleFormControlInput00"  type="number" placeholder="Emp Id" />
       <input value={name} onChange={(e)=>setName(e.target.value)}  class="form-control" id="exampleFormControlInput0"  type="text" placeholder="Jatin" />
       <input value={email} onChange={(e)=>setEmail(e.target.value)}  class="form-control" id="exampleFormControlInput1"  type="email" placeholder="jatin@gmail.com" />
       <select class="form-select" onChange={(e)=>setUser(e.target.value)}  aria-label="Default select example">
        Open this select menu
        <option value="2" selected>Employee</option>
        <option value="1">Admin</option>
      </select>
      <div class="mt-3" class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" onClick={handleClick} type="button">Add Employee </button>
      </div>
       </div>  
       </CForm>
       </CCardBody>
       </CCard>
       </CCol>
       </CRow>
       </CContainer>
            </div>    
      </>

  )
}

export default AddEmploy;
