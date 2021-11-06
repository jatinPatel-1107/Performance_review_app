import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { updateEmployee } from '../actions';
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

const EmployeeUpdate = () => {
  let { id } = useParams();
  const [name,setName]=useState("");
  const [user,setUser]=useState("2");
  const dispatch = useDispatch();
  const history=useHistory();
  const employData=useSelector((state)=>state.employeeData);
  if(employData===undefined)
  {
    return null;
  }
  else{
    console.log(id);
    var arr=employData.data.filter((dat)=>dat.emp_id==id);
     console.log(arr); 
    
  }
  const handleClick=async()=>{
    await dispatch(updateEmployee({emp_id:id,name:name,email:arr[0].email,role:parseInt(user)}));
     history.push(`/employee/${id}`); 
  }


  console.log(name);
  console.log(user);
    return (
      arr?
      <>
      
       <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
        <CRow className="justify-content-center">
          <CCol>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
       <div  class="mb-3">
           <h5> Update Employee Info </h5>
       <input value={name} onChange={(e)=>setName(e.target.value)}  class="form-control" id="exampleFormControlInput0"  type="text" placeholder={arr[0].name}/>
       <input  class="form-control" id="exampleFormControlInput1"  type="email" placeholder={arr[0].email} aria-label="Disabled input example" disabled />
       <select class="form-select" onChange={(e)=>setUser(e.target.value)}  aria-label="Default select example">
        Open this select menu
        <option value="2" selected>Employee</option>
        <option value="1">Admin</option>
      </select>
      <div class="mt-3" class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" onClick={handleClick} type="button">Update </button>
      </div>
       </div>  
       </CForm>
       </CCardBody>
       </CCard>
       </CCol>
       </CRow>
       </CContainer>
            </div>    
      </>:null

  )
}

export default EmployeeUpdate
