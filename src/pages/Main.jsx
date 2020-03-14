import React, { Component } from 'react';
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import About from '../components/About'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'
import ScrollBtn from '../components/ScrollBtn'

class Main extends Component{
    render(){
        return(
            <>
                <Navigation />
                <Content />
                <About />
                <Statistics />
                <Footer />
                <ScrollBtn />
            </>
        );
    }
}

export default Main;
