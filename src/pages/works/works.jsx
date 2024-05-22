import React, { useEffect, useState } from 'react';
import { Card, CardCustomized } from '../../components/card-of-work/card';
import CampanaPrevencion from '../../images/campana-prevencion.jpeg';
import Observatorio from '../../images/observatorio.jpeg';
import Prototipo_phone from '../../images/prototipo_phone.JPG';
import Prototipo_web from '../../images/prototipo_web.JPG';
import Wireframe_media from '../../images/wireframe_media_figma.JPG'

const Works = ({ backgroundColor }) => {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState('#7abcac');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Cambia el color de fondo según la posición del scroll
            if (scrollY > 1000) {
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
        <div className='div-conteneiner_cards' style={{ background: currentBackgroundColor }}>
            <div className='conteneiner_h3'>
                <h3>Works</h3>
            </div>
            <div className='conteneiner_cards'>
                <div className='cards-wrapper'>
                    <Card
                        className='costumer-card'
                        href='https://prevencion.mingeneros.gob.ar/'
                        img src={CampanaPrevencion}
                        titulo='Campaña de prevención contra las violencias de género.'
                        texto=''

                    />
                    <Card
                        className='costumer-card'
                        href='https://observatorio.mingeneros.gob.ar/'
                        img src={Observatorio}
                        titulo='Campaña de prevención contra las violencias de género.'
                        texto='Sitio web publico que maneja estadísticas y los alcances de las violencias de género.'
                    />
                    <CardCustomized
                        className='costumer-card'
                        href='https://www.figma.com/proto/mQBK6RXConniED6RIU2cs3/WINE-CONNECTION?type=design&node-id=674-5530&t=U9HDkAnzA2u4YMrc-0&scaling=scale-down&page-id=3%3A2&starting-point-node-id=674%3A5530'
                        img src={Prototipo_phone} id='img-prototipo'
                        titulo='Trabajo final del curso de Diseño ux/ui'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan odio, quis sagittis ex. Vivamus tempor metus elit, ac aliquam sem ornare ac'
                    />
                    <CardCustomized
                        className='costumer-card'
                        href='https://www.figma.com/file/mQBK6RXConniED6RIU2cs3/WINE-CONNECTION?type=design&node-id=0-1&mode=design&t=GlfU8LBG0FxdOOUd-0'
                        img src={Wireframe_media} id='img-prototipo'
                        titulo='Prototipo en media con figma'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan odio, quis sagittis ex. Vivamus tempor metus elit, ac aliquam sem ornare ac'
                    />
                    <Card
                        className='costumer-card'
                        href='https://www.figma.com/file/OLU18QmYArs0RBiI3rwOw0/portalTableros?type=design&node-id=2-2&mode=design&t=I4DADK7u3SVnbbKw-0'
                        img src={Prototipo_web}
                        titulo='Prototipo web para portal'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan odio, quis sagittis ex. Vivamus tempor metus elit, ac aliquam sem ornare ac'
                    />
                    <Card
                        className='costumer-card'
                        href='https://www.figma.com/file/40qgMPr6OM8cNb7Qj45aw5/Yaelportfolio?type=design&node-id=0-1&mode=design&t=v3DN3Fay4mqG5qAB-0'
                        img src={Prototipo_web}
                        titulo='Prototipo portfolio <strong>working in progress</<strong>'
                        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at accumsan odio, quis sagittis ex. Vivamus tempor metus elit, ac aliquam sem ornare ac'
                    />
                </div>
            </div>
        </div >
    )
}

export default Works
