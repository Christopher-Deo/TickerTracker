import React from 'react'
import Home from './pages/Home'
// import Dashboard from './pages/Dashboard'
// import Profile from './pages/Profile'
// import About from './pages/About'
// import Reports from './pages/Reports'
import './App.css'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
      {/* <Routes>
        <Route path="./" element={ <Home /> } />
        <Route path="./About" element={ <About /> } />
        <Route path="./Dashboard" element={ <Dashboard /> } />
        <Route path="./Reports" element={ <Reports /> } />
        <Route path="./Profile" element={ <Profile /> } />
      </Routes > */}
      <Home />
      <Dashboard />

    </>
  )
}

export default App