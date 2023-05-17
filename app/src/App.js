import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "././components/home"
import Profile from "./components/profile"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/contactBio" element={<Profile />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
