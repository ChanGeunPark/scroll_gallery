import React, { Component, useState } from 'react';

import Navber from '../components/Navber/Navber';
import Footer from '../components/Footer/Footer';
import CustomCurser from './CustomCursor/CustomCurser';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';

import "../styles/home.css";


class Home extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    render() {
        return (
            <>
            <CustomCurser />
            <div className="main-container" id="main-container">
                <Navber />
                <Header />
                <Featured />
                <About />
                <Gallery />
                <Footer />
            </div>
            </>
        );
    }
}

Home.propTypes = {

};

export default Home;