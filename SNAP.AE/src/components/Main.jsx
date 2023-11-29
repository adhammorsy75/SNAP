
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Assuming you are using React Router
import Nav from './Navigation'; // Assuming nav.jsx exports a component named Nav
import Cover from './Cover';
import Banner from './Banner';

const Main = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/cover" element={<Cover />} />
                <Route path="/banner" element={<Banner />} />
            </Routes>
        </>
    );
}

export default Main;