import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage, Loginpage, Registerpage } from './pages'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
        </Routes>
    )
}

export default RoutesComponent
