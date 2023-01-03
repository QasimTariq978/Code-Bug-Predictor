import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"
import Compiler from "./Compiler"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/compiler" element={<Compiler />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
