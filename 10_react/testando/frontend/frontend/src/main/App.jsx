import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Header from '../template/header/Header'
import SideBar from '../template/sidebar/SideBar'
import SideBarButton from '../template/sidebar/SideBarButton'
import Footer from '../template/footer/Footer'

import Routes from './Routes'

import "./App.scss";

export default props =>
    <BrowserRouter >
        <div className="app">
            <Header ></Header>
            <SideBarButton></SideBarButton>
            <SideBar></SideBar>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </BrowserRouter>