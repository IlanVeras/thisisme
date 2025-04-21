import React from "react"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
