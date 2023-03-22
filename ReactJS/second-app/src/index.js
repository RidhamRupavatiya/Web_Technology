import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Addmission from './Addmission'
import Faculty from './Faculty';
import Layout from './Layout';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home/>}></Route>
                <Route path = "/about" element={<About/>}></Route>
                <Route path = "/contact" element={<Contact/>}></Route>
                <Route path = "/addmission" element={<Addmission/>}></Route>
                <Route path = "/faculty" element={<Faculty/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);