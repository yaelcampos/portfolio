
import React, { useEffect, useState } from  'react';
import Nav from '../../components/nav/nav';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Ajusta este valor según sea necesario
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`background_header ${scrolled ? 'scrolled' : ''}`}>
            <Nav />     
        </section>
    );
};

export default Header;

