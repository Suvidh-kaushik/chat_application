import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './pages/signup/Sign.up.jsx'
import Home from './pages/home/Home.jsx'
 import Login from './pages/login/Login.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'


function App (){

  const {authuser}=useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
  <Routes>
<Route path='/' element={authuser?<Home/>:<Navigate to="/login"/>}/>
<Route path="/login" element={authuser? <Navigate to="/"/>:<Login/>}/>
<Route path='/signup' element={authuser? <Navigate to="/"/>:<Signup/>}/>
</Routes>
<Toaster/>
    </div>
  )
}

export default App
