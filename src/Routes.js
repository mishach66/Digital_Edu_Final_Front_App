import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Homepage, Loginpage, ProductFormPage, Registerpage } from './pages'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
        </Routes>
    )
}

export default RoutesComponent
