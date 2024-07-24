import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';

const bio = () => {
  return (
    <Parallax y={[-20, 20]}>
    <section className='background_skills'>
      <div>
      <main className='main-bio'>
                    <h3>Bio</h3>
                    <div className='div_span'>
                        <span className='span'>1991</span>
                        Naci en Bs As
                    </div>
                    <div className='div_span'>
                        <span className='span'> 2021</span>
                        -Curso de Programacion
                        Inicial Tecnologia Educativa del
                        Ministerio de Educacion de la
                        ciuda de de Buenos Aires.
                    </div>
                    <div className='div_span'>
                        <span className='span'>2022</span>
                        Septiembre - Carrera de
                        Desarrollo Frontend React en
                        Coderhouse.
                    </div>
                    <div className='div_span'>
                        <span className='span'>2023</span>
                        Septiembre - Curso diseño
                        UX/UI
                    </div>
                    <div>
                        <span className='span'>2024</span>
                        Marzo - Tecnicatura Superior
                        en Desarrollo de Software
                    </div>
                </main>

      </div>
    </section>
    </Parallax>
  );
};

export default bio;