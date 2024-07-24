import React from 'react';
import Header from '../header/header';
import Descrption from '../description/descrption';
import Skills from '../skills/skills'
import Work from '../work/work';
import Works from '../works/works';
import Bio from '../bio/bio';
import Love from '../love/love';
import OnTheInternet from '../onTheInternet/onInternet';
import Footer from '../footer/footer';
/*  /import Animation from '../../components/animation/Animation'; */


const Home = () => {
    return (
        <>
            <Header />
            <Descrption/>
            <Work/>
            <Works/>
            <Bio />
            <Skills />
            <OnTheInternet />
            <Love />
            <Footer />

        </>
    );
}

export default Home;