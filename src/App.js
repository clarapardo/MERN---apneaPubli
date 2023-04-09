import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home.jsx'


function App() {
  return (
    <>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

    </>
  );
}

export default App;
