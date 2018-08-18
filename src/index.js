import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request; // always return request if not your blocking it
}, error => {
  console.log(error); // only pops up when sending the request for example internet connectivity fails
  return Promise.reject(error); // forward to our request as we wrote it in the component where we handle again with the catch method
})

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response; 
}, error => {
  console.log(error); 
  return Promise.reject(error); 
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
