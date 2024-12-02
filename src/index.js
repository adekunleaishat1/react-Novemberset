import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import Todo from './Todo';
import Navbar from './Navbar';
import Notfound from './Notfound';
import Landing from './Landing';
import Http from './Http';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/*' element={<Notfound/>}/>
         <Route path='/http' element={<Http/>}/>
         <Route path='/signup' element={<Signup/>}/>

        <Route path='/home' element={<Home/>}>
          <Route path='/home' element={<Landing/>}/>
          <Route path='/home/todo' element={<Todo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
