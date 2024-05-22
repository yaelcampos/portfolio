import React from 'react'

const nav = () => {
  return (
        <div className='conteiner-nav'>
                <div className='div-logo_nav'>
                    <img src={Butterfly} alt="Logo SVG" className='logo-img' />
                    <h1>Yael Campos</h1>
                </div>
                <div>
                    <h2>Mis trabajos</h2>
                </div>
                <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                    <h2>Source</h2>
                </a>
            </div>
  )
}

export default nav