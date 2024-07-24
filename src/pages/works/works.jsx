import React, { useState } from 'react';
import { Card } from '../../components/card-of-work/card';

const Works = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterClick = (filter) => {
        setFilter(filter);
    };

    const cards = [
        {
            href: 'https://prevencion.mingeneros.gob.ar/',
            titulo: 'Campaña Nacional de prevención contra las violencias de género.',
            texto: 'Desarrollo, Maquetado, diseño y prototipado responsive en este sitio web público que se propone trabajar sobre el origen de las violencias: las desigualdades de género.',
            skills: 'React, Sass, Js, React-bootstrap',
            id: 'desarrollo_web'
        },
        {
            href: 'https://observatorio.mingeneros.gob.ar/',
            titulo: 'Observatorio de las Violencias y Desigualdades por Razones de Género.',
            texto: 'Desarrollo, Maquetado, diseño responsive en este sitio web público que representa un espacio de sistematización, análisis y producción de información sobre violencias y desigualdades de género.',
            skills: 'React, Css, Js, React-bootstrap, Docker',
            id: 'desarrollo_web'
        },
        {
            href: 'https://www.figma.com/proto/mQBK6RXConniED6RIU2cs3/WINE-CONNECTION?type=design&node-id=674-5530&t=U9HDkAnzA2u4YMrc-0&scaling=scale-down&page-id=3%3A2&starting-point-node-id=674%3A5530',
            titulo: 'Wine Lover: Trabajo final del curso de Diseño ux/ui',
            texto: 'Prototipo de App busquedas de bodegas de vino',
            skills: 'Figma, Figma',
            id: 'ux_ui'
        },
        {
            href: 'https://www.figma.com/file/OLU18QmYArs0RBiI3rwOw0/portalTableros?type=design&node-id=2-2&mode=design&t=I4DADK7u3SVnbbKw-0',
            titulo: 'Prototipo web para portal',
            texto: 'Diseño para un portal de  tableros',
            skills: 'Figma, Figma',
            id: 'ux_ui'
        },
        {
            href: 'https://play.google.com/store/apps/details?id=ar.gob.lalinea144&hl=es_AR',
            titulo: 'App Línea 144',
            texto: 'Prototipo con actualizaciones de la App de la Línea del 144',
            skills: 'React Native,Yarn, Expo, Figma para prototipar',
            id: 'react_native'
        },
        {
            href: 'https://www.figma.com/design/KfkbwLBGu4WGECrfN8fwpm/AppSegundaVidaEco?node-id=0-1&t=3lPFMAzIYDGV4Bln-0',
            repositorio: 'https://github.com/yaelcampos/appSegundaVida',
            titulo: 'App Segunda Vida Deco WIP',
            texto: 'Aplicacion sobre ',
            skills: 'Figma, React Native, Expo Go',
            id: 'react_native',
        }
    ];
    const filteredCards = filter === 'all' ? cards : cards.filter(card => card.id === filter);

    return (
        <div className='conteneiner_cards_of_works'>
            <div className='conteneiner_h3'>
                <h3>Works</h3>
            </div>
            <span>
                Filtrar:
            </span>
            <div className='box-filtro'>
                <button 
                    className={`filtro ${filter === 'desarrollo_web' ? 'seleccionado' : ''}`} 
                    onClick={() => handleFilterClick('desarrollo_web')}>
                    Desarrollo Front end
                </button>
                <button 
                    className={`filtro ${filter === 'ux_ui' ? 'seleccionado' : ''}`} 
                    onClick={() => handleFilterClick('ux_ui')}>
                    Diseño Ux/Ui
                </button>
                <button 
                    className={`filtro ${filter === 'react_native' ? 'seleccionado' : ''}`} 
                    onClick={() => handleFilterClick('react_native')}>
                    React Native
                </button>
            </div>

            <div className='conteneiner_cards'>
                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        className='costumer-card'
                        href={card.href}
                        repositorio={card.repositorio}
                        titulo={card.titulo}
                        texto={card.texto}
                        skills={card.skills}
                        id={card.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Works;