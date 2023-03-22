import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuperCar from './SuperCar';
import './index.css';
import Home from './Home';
import Layout from './Layout';
import SuperCarDetail from './SuperCarDetail';
import SuperCarAdd from './SuperCarAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>}/>
                <Route path="/SuperCars" element={<SuperCar/>}/>
                <Route path="/SuperCar/:id" element={<SuperCarDetail/>}/>
                <Route path="/SuperCar/add" element={<SuperCarAdd/>}/>
                <Route path="/SuperCar/edit/:id" element={<SuperCarAdd />}></Route>
            </Route>
         </Routes>
    </BrowserRouter>
    </>
);