import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getReview } from '../../actions';
const PerReview=()=>{
 
    let { id } = useParams();
    const dispatch=useDispatch();
    const reviews=useSelector((state)=>state.reviewData);
     useEffect(()=>{
      dispatch(getReview());
    },[reviews]);
   
    if(reviews===undefined)
    {
      return null;
    }
    else{
     console.log(reviews);
     var review=reviews.filter((dat)=>dat.review_id==id);
     console.log(review);
    }
    return(
      review.length ?
        <div class="card" >
        <table class="table caption-top" class="table table-striped">
            {/* <caption>Employee</caption> */}
  <tbody>
    <tr>
      <th scope="row">From</th>
      <td>{review[0].name_from}</td>
    </tr>
    <tr>
      <th scope="row">To</th>
      <td>{review[0].name_to}</td>
    </tr>
    <tr>
      <th scope="row">Year</th>
      <td>2021</td>
    </tr>
    <tr>
      <th scope="row">Quarter</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Remarks</th>
      <td>{review[0].remarks}</td>
    </tr>
    <tr>
      <th scope="row">Ratings</th>
      <td>{(() => {
        if (review[0].rating==1) {
          return (
            <div>Below expectations</div>
          )
        } else if (review[0].rating==2) {
          return (
            <div>Meets expectations</div>
          )
        } else if (review[0].rating>2) {
          return (
            <div>Exceeds expectations</div>
          )
        }
      })()}</td>
    </tr>
    <tr>
      <th scope="row">Status</th>
      <td>{review[0].status==2?"Submitted":"Assigned"}</td>
    </tr>
    
   
  </tbody>
</table>
</div>
:null
    );
}

export default PerReview;