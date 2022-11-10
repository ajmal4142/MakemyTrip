import React from 'react'
import { Flight } from './Components/Flight';
import {  NavBar } from './Components/NavBar'
import { BrowserRouter as Routes,Route } from 'react-router-dom';
export const App = () => {
  return (
    <>
      
      <NavBar/>
      <Routes>
        <Route path="/plane" element={<Flight/>} />
      </Routes>
      
    </>
  )
}

export default App;