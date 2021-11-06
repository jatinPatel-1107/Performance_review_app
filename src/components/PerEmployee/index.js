import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getEmployee } from '../../actions';
const PerEmployee=()=>{
  let { id } = useParams();
  const dispatch=useDispatch();
  const employData=useSelector((state)=>state.employeeData);
  useEffect(()=>{
    dispatch(getEmployee());
  },[employData]);
  if(employData===undefined)
  {
    return null;
  }
  else{
    console.log(id);
    var arr=employData.data.filter((dat)=>dat.emp_id==id);
     console.log(arr);   
  }
    return(
      arr.length?
        <div class="card" >
        <table class="table caption-top" class="table table-striped">
            {/* <caption>Employee</caption> */}
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{arr[0].name}</td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{arr[0].email}</td>
    </tr>
    <tr>
      <th scope="row">Role</th>
      <td>{arr[0].role==2?"Employee":"Admin"}</td>
    </tr>
  </tbody>
</table>
</div>
:null
    );
}
export default PerEmployee;