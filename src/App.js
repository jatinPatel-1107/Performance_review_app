import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';
 import Login from './components/Login/Login'
import EmployeeInfo from './components/EmployeeInfo'
import EmployeeUpdate from './components/EmployeeUpdate'
import ReviewAdd from './components/ReviewAdd/ReviewAdd';
import ReviewSubmit from './components/ReviewSubmit/ReviewSubmit';
import {getEmployee} from './actions/index'
import PerEmployee from './components/PerEmployee';
import AddEmploy from './components/AddEmploy'
import HeaderComp from './components/Header/HeaderComp';
import ReviewList from './components/Review/ReviewList';
import PerReview from './components/PerReview';
function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getEmployee());
  },[]);
  return (
    <Router>
    <div className="App">
      <HeaderComp/>
      <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path='/employees' component={EmployeeInfo}></Route>
      <Route exact path='/employee/add' component={AddEmploy}></Route>
      <Route exact path="/employee/:id" component={PerEmployee}></Route>
      <Route exact path="/employee/:id/edit" component={EmployeeUpdate}></Route>
      <Route exact path="/review" component={ReviewList}></Route>
      <Route exact path="/review/:id/submit" component={ReviewSubmit}></Route>
      <Route exact path="/review/add" component={ReviewAdd}></Route>
      <Route exact path="/review/:id" component={PerReview}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
