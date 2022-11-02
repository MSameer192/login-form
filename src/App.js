import './App.css';
import React from 'react';
import LoginValidation from './components/LoginValidation';
import AlertLoginForm from './components/AlertLoginForm';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterForm from './components/FilterForm';



function App() {

  
  return (
  <>
    < BrowserRouter >
      <Navbar />
      <Routes>        
        <Route path="/about" element={<AlertLoginForm />} />
        <Route path="/" element={<LoginValidation />} />
        <Route path='/filterArray' element={<FilterForm />} />
      </Routes>
    </BrowserRouter>  
  </>
          
  );

}

export default App;
