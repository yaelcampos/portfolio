import React, { useEffect, useState } from 'react';
import Yael from '../../images/yael.jpeg';
import MediaMariposa from '../../images/472959.svg';

const Descrption = ({ backgroundColor }) => {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState('#7abcac');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Cambia el color de fondo según la posición del scroll
            if (scrollY > 10) {
                setCurrentBackgroundColor('linear-gradient(20deg,#7c598c,#296f92');
            } else {
                setCurrentBackgroundColor('rgba(119, 64, 105, 0.8)');
            }
        };

        // Agrega el event listener cuando el componente se monta
        window.addEventListener('scroll', handleScroll);

        // Elimina el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [backgroundColor]);
    return (
        <>
            <section class='section-despcription' style={{ background: currentBackgroundColor }}>
                <div class='div-descrition'>
                    <p>Hola, soy desarrolladora front end con sede en Buenos Aires!</p>
                </div>
                <div class='div-name_photo__yael'>
                    <div class='mt-8' >
                        <h2>Yael Campos</h2>
                        <p>Artesana Digital (Development)</p>
                    </div>
                    <div className='div-photo_yael'>
                        <img src={Yael} alt="foto de Yael" />
                    </div>
                </div>
                <div className='contenedor-mail' alt='icono de mail para contactarme'>
                    <img src={MediaMariposa} className='middle-mariposa'/>
                </div>
                <div className='conteiner-nav'>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>Source</h2>
                    </a>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>Trabajos</h2>
                    </a>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>En linea</h2>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Descrption