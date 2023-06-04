import React, {useState} from 'react'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Login from "./Pages/Login/Login";
import Data from "./Pages/Data/Data";
import Demographics from './Pages/Demographics/Demographics';
import SystemSuccess from './Pages/SystemSuccess/SystemSuccess';

function App() {
  return (
    <div className='app'>
        <Router>
          <Routes>
            <Route path = "/" element = {<Login/>} />
            <Route path = "/data" element = {<Data/>} />
            <Route path = "/demographics" element = {<Demographics/>} />
            <Route path = "/systemsuccess" element = {<SystemSuccess/>} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
