import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Commanders from './pages/Commanders'
import Planets from './pages/Planets'
import './index.css'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-100">
        <nav className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold drop-blue">
              Galaktyczna Flota Imperium
            </Link>
            <div className='drop-shadow'>
            <ul className="flex space-x-4">
              <li><Link to="/fleet" className="text-shadow-red hover:text-blue-500">Flota</Link></li>
              <li><Link to="/planets" className="text-shadow-red">Planety</Link></li>
              <li><Link to="/commanders" className="text-shadow-red">Dowódcy</Link></li>
            </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/commanders" element={<Commanders />} />
          <Route path="/planets" element={<Planets />} />
        </Routes>
      </div>
    </Router>
  )
}