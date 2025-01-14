import React from 'react';
import Header from '../header/header';
import Descrption from '../description/descrption';
import Skills from '../skills/skills'
import Work from '../work/work';
import Works from '../works/works';
import Love from '../love/love';
import OnTheInternet from '../onTheInternet/onInternet';
import Footer from '../footer/footer';
/*  /import Animation from '../../components/animation/Animation';
import Bio from '../bio/bio'; */


const Home = () => {
    return (
        <>
            <Header />
            <Descrption/>
            <Work/>
            <Works/>
           {/* <Bio /> */}
            <Skills />
            <OnTheInternet />
            <Love />
            <Footer />

        </>
    );
}

export default Home;