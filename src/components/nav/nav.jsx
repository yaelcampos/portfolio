import React from 'react';
import Butterfly from '../../images/full-mariposa.svg';

const nav = () => {
    return (
        <section className='conteiner-nav'>
            <div className='div-logo_nav'>
                <img src={Butterfly} alt="Logo SVG" className='logo-img' />
                <h1>Yael Campos</h1>
            </div>
            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                <h2>Source</h2>
            </a>
            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                <h2>Trabajos</h2>
            </a>
            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                <h2>En linea</h2>
            </a>
        </section>
    )
}

export default nav