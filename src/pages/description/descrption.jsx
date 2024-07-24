import React, { useEffect, useState } from 'react';
import Yael from '../../images/yael.jpeg';
import MediaMariposa from '../../images/472959.svg';

const Descrption = () => {
    return (
        <>
            <section class='section-despcription'>
                <div class='div-descrition'>
                    <p>Hola, soy desarrolladora front end viviendo en Buenos Aires!</p>
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
            </section>
        </>
    )
}

export default Descrption