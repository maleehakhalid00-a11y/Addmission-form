import React, { useState } from 'react'
import './App.css'
import Addmission from './Components/Addmission/addmission'
import Education from './Components/Education/education'
import { Route, Routes } from 'react-router-dom'
import Fee from './Components/Fee/fee'
import Thanks from './Components/Thanks/thanks'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Addmission />}></Route>
      <Route  path="/education" element={<Education />} ></Route>
      <Route path='/fee' element={<Fee/>}></Route>
      <Route path='/thanks'element={<Thanks/>}></Route>
    </Routes>
    
    </>
 
  )
}


export default App
