import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector } from 'react-redux';
import { getReview } from '../../actions';
import { useHistory } from "react-router-dom";
const ReviewList=()=>{

  const dispatch = useDispatch();
  const reviews=useSelector((state)=>state.reviewData);
  const history=useHistory();
    useEffect(()=>{
      dispatch(getReview());
    },[reviews]);
    if(reviews===undefined)
    {
      return null;
    }
    else{
     console.log(reviews);
     var arr=reviews.filter((dat)=>dat.status==1);
     console.log(arr);
    }
    const rowClick=(data)=>{
        {console.log("row-Click")}
        const reviewId=data.review_id;
        history.push(`/review/${reviewId}/submit`); 
    }
    return(
        arr?
        <div>
        {console.log("Review List Render")}
        <div> <h3> Assinged Review</h3></div>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Review Id</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Years</th>
            <th scope="col">Quarter</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
      <tbody>
      {arr.map((dat) => {
                        return (
                            
                            <tr onClick={()=>rowClick(dat)} key={dat.review_id} >
                                <th>{dat.review_id}</th>
                                <td>{dat.name_from}</td>
                                <td >{dat.name_to}</td>
                                <td >{dat.year}</td>
                                <td >{dat.quarter}</td>
                                <td >Assigned</td>
                               
                            </tr>
                           
                        )

                    })}
      </tbody>
      </table>
      </div>
       :null
    )

}
export default ReviewList;