import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;