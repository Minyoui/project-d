import './navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//icons
import dropdown from '../../../../assets/icons/dropdown.png';
import circleArrow from '../../../../assets/icons/circle-up-right.png';
import Profile from '../../../../assets/icons/profile-icon.png';

//other imgs
import TextLogo from '../../../../assets/business/maison-d-text-logo.svg';

function Navbar () {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Navbar scroll identifier
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile Nav screen automatically closes when resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <div className={`nav-wrapper ${scrolled? 'scrolled' : ''}`}>
                <nav className={`nav-container ${scrolled? 'scrolled' : ''}`}
                     id={`${menuOpen? 'nav-active' : ''}`}>

                    <div className={`hamburger ${menuOpen? 'nav-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </div>
                    <div className={`cancel ${menuOpen? 'nav-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        X
                    </div>

                    <a href="/" className='text-logo'><img src={TextLogo}/></a>
                    <ul className={`nav-links ${menuOpen? 'nav-active' : ''}`}>
                        <li><a href='#home' onClick={() => setMenuOpen(!menuOpen)}>HOME<div className='nav-underline'/></a></li>
                        <li><a href='#home' id='products-menu'>PRODUCTS<img src={dropdown}/></a></li>
                        <li><a href='#home'>FAQs<div className='nav-underline'/></a></li>
                        <li><a href='#contact' onClick={() => setMenuOpen(!menuOpen)}>CONTACT US<div className='nav-underline'/></a></li>
                    </ul>
                    <Link to='/' className='sign-in-link'>Sign Up / Sign In<img src={circleArrow}/></Link>
                    <Link to='/' className='sign-in-link-mobile'><img src={Profile}/></Link>
                    
                    
                    
                </nav>
            </div>
        </>
    )
}

export default Navbar;