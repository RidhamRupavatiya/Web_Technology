import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './index.css';

import Layout from './Layot';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Addmission from './Addmission';
import Faculty from './Faculty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path = "about" element={<About />}></Route>
                <Route path = "contact" element={<Contact />}></Route>
                <Route path = "addmission" element={<Addmission />}></Route>
                <Route path = "faculty" element={<Faculty />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);