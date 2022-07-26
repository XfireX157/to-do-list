import React from 'react';
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';

function Rotas() {
    return(
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default Rotas