import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Deals from './pages/Deals';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <Routes>                                                                        <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
    </Routes>

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="contactus" element= {<Contact/>}/>
        <Route path="deal" element= {<Deals/>}/>

      </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
