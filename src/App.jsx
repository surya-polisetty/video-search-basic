import Home from "./pages/Home/Home"
import Search from "./pages/Search/Search"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React from 'react'

export default function App() {

    return(
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/search/:searchquery" element = {<Search />} />                
            </Routes>
        </Router>
    </>
    );
};
