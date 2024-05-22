import React from "react";

const Card = ({ href, src, titulo, texto }) => {
    return (
        <a className='card' href={href} target="_blank" >
            <img className='img-card' src={src} alt="Imagen del proyecto" />
            {titulo}
            {texto}
        </a>
    );
};

const CardCustomized = ({ href, src, titulo, texto }) => {
    return (
        <a className='card' href={href} target="_blank" >
            <img className='img-prototipo' src={src} alt="Imagen del proyecto" />
            {titulo}
            {texto}
        </a>
    );
};




export {Card, CardCustomized};
