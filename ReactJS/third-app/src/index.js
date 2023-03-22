import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Addmission from './Addmission';
import Contact from './Contact';
import Faculties from './Faculties';
import Home from './Home';
import Layout from './Layout';
import FacultyDetail from './FacultyDetail';
import Facultyadd from './Facultyadd';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Addmission" element={<Addmission/>}/>
                <Route path="/Faculties" element={<Faculties/>}/>
                <Route path="/Faculties/:id" element={<FacultyDetail/>}/>
                <Route path="/Faculties/add" element={<Facultyadd/>}/>
                <Route path="/faculties/edit/:id" element={<Facultyadd />}></Route>
            </Route>
         </Routes>
    </BrowserRouter>
    </>
);