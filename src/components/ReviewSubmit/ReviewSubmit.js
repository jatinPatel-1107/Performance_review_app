import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import { getReview } from '../../actions';
import { useHistory } from "react-router-dom";
import {useParams} from 'react-router-dom';
import { submitReview,getLoggIn } from '../../actions';

const ReviewSubmit=()=>{
    const dispatch=useDispatch();
    const [rate,setRate]=useState(0);
    const [remark,setRemark]=useState("");
    let { id } = useParams();
    const reviews=useSelector((state)=>state.reviewData);
    const history=useHistory();
    // useEffect(()=>{
    //   dispatch(getReview());
    // },[reviews]);
    if(reviews===undefined)
    {
      return null;
    }
    else{
     console.log(reviews);
     var arr=reviews.filter((dat)=>dat.review_id==id);
     console.log(arr);
    }
    const handleClick=async()=>{
        await dispatch(getLoggIn());
        console.log(remark);
        console.log(rate);
        await  dispatch(submitReview({rating:parseInt(rate),remarks:remark,review_id:id}));
          history.push(`/review/${id}`); 
      }

    return(
        arr?
        <div class="card">
            <h3>Submit Review feedback</h3>
        <form >
        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Review Id</div>
        <input  class="form-control" type="number" placeholder={arr[0].review_id}  aria-label="Disabled input example" disabled ></input>
        </div>
        </div>
        <div class="col-12">
            {/* <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label> */}
            <div class="input-group">
            <div class="input-group-text">From</div>
            <input  class="form-control" type="text" placeholder={`${arr[0].name_from}  (${arr[0].from_emp})` }  aria-label="Disabled input example" disabled ></input>
            </div>
        </div>
        <div class="col-12">
            {/* <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label> */}
            <div class="input-group">
            <div class="input-group-text">To   </div>
            <input  class="form-control" type="text" placeholder={`${arr[0].name_to}  (${arr[0].to_emp})` }  aria-label="Disabled input example" disabled ></input>
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

        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Rating</div>
        <select onChange={(e)=>setRate(e.target.value)} class="form-select"   aria-label="Default select example">
        <option selected>Select rating</option>
        <option value="1" >Below expectations</option>
        <option value="2">Meets expectations</option>
        <option value="3">Exceeds expectations</option>
        </select>
        </div>
        </div>

        <div class="col-12">
        <div class="input-group">
        <div class="input-group-text">Remarks</div>
        <input onChange={(e)=>setRemark(e.target.value)} class="form-control" type="text" placeholder="type here..." ></input>
        </div>
        </div>


        <div  class="d-grid gap-2 col-6 mx-auto">
        <button onClick={handleClick} class="btn btn-secondary" type="button">Submit</button>
        </div>
        </form>
        </div>
         :null
    );
};
export default ReviewSubmit;