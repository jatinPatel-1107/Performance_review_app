const axios=require('axios');

const url = 'http://localhost:8080';

export const fetchUser = ()=>  axios.get(`${url}/users`);
export const fetchReview = ()=>  axios.get(`${url}/review`, { withCredentials: true });
 export const fetchEmployee = ()=>  axios.get(`${url}/emp`);
 export const fetchUpdateEmployee = (updateData)=>  axios.put(`${url}/emp`,updateData);
 export const fetchDeleteEmployee= (id)=> axios.delete(`${url}/emp/${id}`);
 export const fetchAddEmployee= (addData)=> axios.post(`${url}/emp`,addData);
 export const fetchAddReview= (addData)=> axios.post(`${url}/review`,addData);
 export const fetchLoggedIn= (addData)=> axios.post(`${url}/login`,addData, { withCredentials: true });
export const fetchLoggIn= ()=> axios.get(`${url}/login`, { withCredentials: true });
export const fetchLogout= ()=> axios.get(`${url}/logout`);
export const fetchSubmitReview = (Data)=>  axios.put(`${url}/submit-review`,Data, { withCredentials: true });

