

import React, { useState, useEffect } from 'react';
import Butterfly from '../../images/full-mariposa.svg';
import {
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
} from '@chakra-ui/icons';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initialize the state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='container-nav'>
            <div className='div-logo_nav'>
                <img src={Butterfly} alt="Logo SVG" className='logo-img' />
                <h1>Yael Campos</h1>
            </div>
            {isMobile ? (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        className="icon_hamburgues"
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem >
                            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                                <h2>Source</h2>
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                                <h2>Trabajos</h2>
                            </a>
                        </MenuItem>
                        <MenuItem >
                            <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                                <h2>En línea</h2>
                            </a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <nav>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>Source</h2>
                    </a>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>Trabajos</h2>
                    </a>
                    <a href="https://github.com/yaelcampos" target="_blank" rel="noopener noreferrer">
                        <h2>En línea</h2>
                    </a>
                </nav>
            )}
        </section>
    );
};

export default Nav;