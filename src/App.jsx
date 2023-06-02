

// importaciones
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";
import './App.css'


// Vistas 
import Detalle from "./views/Detalle"
import Home from "./views/Home"
import Carrito from "./views/Carrito"

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
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
