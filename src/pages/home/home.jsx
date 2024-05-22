import React from 'react';
import Header from '../header/header';

import Descrption from '../description/descrption';
import Skills from '../skill/skill'
import Work from '../work/work';
import Works from '../works/works';
import Bio from '../bio/bio';
import Love from '../love/love';
import OnTheInternet from '../onTheInternet/onInternet';
import Footer from '../footer/footer';
/*  /import Animation from '../../components/animation/Animation'; */


const home = () => {
    return (
        <>
            <Header/>
            <Descrption backgroundColor="lightgreen"/>
            <Work/>
            <Works backgroundColor="background-image: linear-gradient (20deg,#7c598c,#296f92);"/>
            <Skills/>
            <OnTheInternet/>
            <Bio/>
            <Love/> 
            <Footer/>
        </>
    )
}

export default home