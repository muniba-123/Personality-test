import React from 'react'
import {
    Route, Routes,
    // Navigate, Outlet
}
    from 'react-router-dom'
import Form from './Views/Form';
import Home from './Views/Home';
let AppRoutes = () => {
    return <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' exact element={<Home />} />
        <Route path='/form' exact element={<Form />} />

        <Route path='*' element={<Home />} />
    </Routes>

}
export default AppRoutes;

