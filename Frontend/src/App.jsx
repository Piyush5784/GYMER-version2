
import './App.css'
import { memo } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import Navbar from './component/Navbar/Navbar.jsx'
import Login from './pages/Login/Login'
import Register from './component/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Rates from './pages/Rates/Rates'
import { UserDataProvider } from "./Context/User.jsx"
import Navbar2 from './component/Navbar/Navbar2.jsx'
import { Toaster } from 'react-hot-toast'
import toast from "react-hot-toast";
function App() {

  return (
    <>
      <UserDataProvider>
        <Router>
          <Toaster />
          <Navbar2 />
          <Routes>

            <Route path='/' element={<Homepage />}></Route>

            <Route path='/login' element={<Login />}></Route>

            <Route path='/register' element={<Register />}></Route>

            <Route path='/dashboard' element={<Dashboard />}></Route>

            <Route path='/rates' element={<Rates />}></Route>
          </Routes>
        </Router>
      </UserDataProvider>
    </>
  )
}

export default memo(App)
