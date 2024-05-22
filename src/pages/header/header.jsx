
import React from 'react';
import Butterfly from '../../images/full-mariposa.svg';

const Header = () => {

    return (
        <nav className='background_header'>
            <img src={Butterfly} alt="Logo SVG" className='logo-img' />     
        </nav>
    );
};

export default Header;