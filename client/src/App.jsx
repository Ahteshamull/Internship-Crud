import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import './App.css'

export default function App() {
  return (
    <><Navbar />
    <Home/>
    </>
  )
}
