import './hero.css';
import { Link } from 'react-router-dom';

//other imgs
import HeroLogo from '../../../../assets/business/MD-Logo.svg';

function Hero () {
    return (
        <>
            <div className='hero-wrapper' id="home">
                <img src={HeroLogo} alt='Spa Logo' className='hero-logo'/>
                <Link to='/'>
                    <button className='book-now-btn'>
                        BOOK NOW
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Hero;