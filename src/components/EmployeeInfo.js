import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,Route } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import EmployeeUpdate from './EmployeeUpdate';
import { useHistory } from "react-router-dom";
import { deleteEmployee } from '../actions';
import { getEmployee } from '../actions';
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const EmployeeInfo = () => {
  const [id,setId]=useState(0);
  const history=useHistory();
  const dispatch = useDispatch();
  const employData=useSelector((state)=>state.employeeData);
  // if(employData==undefined)
  // return;
  // else{
    useEffect(()=>{
      dispatch(getEmployee());
    },[employData]);
    if(employData===undefined)
    {
      return null;
    }
    else{
     var arr=employData.data;
     console.log(arr);
    }
  // console.log(arr); 
  
  const rowClick=(e)=>{
    console.log(e);
    setId(e);
    history.push(`/employee/${e}/edit`); 
  }
  const deleteClick=(e)=>{
    console.log(e);
    dispatch(deleteEmployee(e));
    
  }
  const addClick=()=>{
    history.push("/employee/add");
  }
  console.log(id);
  return (
    !id?
    <>
      <div class="card-header col-md-12 bg-light  text-right "><h3>Employee</h3>
      <button class="btn btn-primary" type="button" onClick={addClick}>Add</button>
      </div>
      <div class="card-body">
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Emp Id</th>
                    <th className="text-center">Name</th>
                    <th>Email id</th>
                    <th className="text-center">Action</th>
                
                  </tr>
                </thead>
                <tbody>

                    {arr.map((dat) => {
                        return (
                            
                            <tr key={dat.emp_id} >
                                <th onClick={()=>rowClick(dat.emp_id)}>{dat.emp_id}</th>
                                <td onClick={()=>rowClick(dat.emp_id)}>{dat.name}</td>
                                <td onClick={()=>rowClick(dat.emp_id)}>{dat.email}</td>
                                <td><div><a onClick={()=>deleteClick(dat.emp_id)} class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                  </svg></a></div></td>
                            </tr>
                           
                        )

                    })}

                </tbody>
              </table>
                    
              </div>
    </>:null
    // <Route path="./edit">
    // <EmployeeUpdate id={id}/>
  // </Route>
  );
}

export default EmployeeInfo
