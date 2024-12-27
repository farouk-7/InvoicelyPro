import React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../pages/register/Index'


const Login = lazy(()=> import("../pages/login/Index"))
const Unauthenticated = () => {
  return (
    <Suspense fallback={<p></p>}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={< Login/>} />
            <Route path="/register" element = {<Register />} />
            <Route path="/*" element={<Login />} />
        </Routes>
        
        </BrowserRouter>

    </Suspense>
  )
}

export default Unauthenticated