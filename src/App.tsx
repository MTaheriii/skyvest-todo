import React, { useEffect } from 'react'

import logo from './logo.svg'

import { Counter } from './features/counter/Counter'
import './App.css'
import { Outlet, Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/crypto')
  }, [])

  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
