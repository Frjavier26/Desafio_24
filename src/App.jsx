

// importaciones
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
import './App.css'


// Vistas 
import Detalle from "./views/Detalle"
import Home from "./views/Home"
import Carrito from "./views/Carrito"
import Login from "./views/login"
import Registro from "./views/Registro"

// Components
import Navbar from "./components/Navbar"

//Context
import { Provider } from './Context/Context';



function App() {


  return (
    <div className='App'>
      <BrowserRouter >
        <Provider>
          <Navbar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Detalle/:id" element={<Detalle />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
