import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import { AddReview } from '../../actions';
import { useHistory } from "react-router-dom";
const ReviewAdd=()=>{
    const [from,setFrom]=useState(0);
    const [to,setTo]=useState(0);
    const [id,setId]=useState(0);
    const dispatch=useDispatch();
    const history=useHistory();
    const employData=useSelector((state)=>state.employeeData);
    if(employData===undefined)
    {
      return null;
    }
    else{
     var arr=employData.data;
     console.log(arr);
    }
    const handleClick=async()=>{
        await dispatch(AddReview({from_emp:from,to_emp:to,review_id:id,quarter:3,year:2021,}));
        history.push(`/review/${id}`);
        
     }

    return(
        employData?
        <div class="card">
            <h3>Submit Review Request</h3>
        <form >
        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Review Id</div>
        <input onChange={(e)=>setId(e.target.value)} class="form-control" type="number" placeholder="Review id" ></input>
        </div>
        </div>
        <div class="col-12">
            {/* <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label> */}
            <div class="input-group">
            <div class="input-group-text">From</div>
            <select  onChange={(e)=>setFrom(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>Select reviewer</option>
            {arr.map(fbb =>
                        <option key={fbb.emp_id} value={fbb.emp_id}>{fbb.name}/{fbb.emp_id}</option>
                      )};
            </select>
            </div>
        </div>
        <div class="col-12">
            {/* <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label> */}
            <div class="input-group">
            <div class="input-group-text">To</div>
            <select  onChange={(e)=>setTo(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>Select reviewee</option>
            {arr.map(fbb =>
                        <option key={fbb.emp_id} value={fbb.emp_id}>{fbb.name}/{fbb.emp_id}</option>
                      )};
            </select>
            </div>
        </div>
        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Year</div>
        <input class="form-control" type="text" placeholder="2021" aria-label="Disabled input example" disabled></input>
        </div>
        </div>
        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Quater</div>
        <input class="form-control" type="text" placeholder="3" aria-label="Disabled input example" disabled></input>
        </div>
        </div>
        <div  class="d-grid gap-2 col-6 mx-auto">
        <button onClick={handleClick} class="btn btn-secondary" type="button">Add</button>
        </div>
        </form>
        </div>
         :null
    );
};
export default ReviewAdd;