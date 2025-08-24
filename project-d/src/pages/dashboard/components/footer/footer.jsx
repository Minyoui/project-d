import './footer.css';

// Business
import Logo from '../../../../assets/business/MD-Logo.svg';

// Icons
import Facebook from '../../../../assets/icons/Facebook logo.png';
import Instagram from '../../../../assets/icons/instagram logo.png';
import Tiktok from '../../../../assets/icons/tiktok logo.png';

function Footer () {
    return (
        <>
            <div className='footer-section'>
                <img src={Logo} alt="Maison-D" className='footer-logo' />
                <div className='footer-container'>
                    <div className='social-container'>
                        <p>Follow us on our Socials!</p>
                        <div className='social-divider'/>
                        <ul className='social-links'>
                            <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100092370982090"><img src={Facebook} /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/blissfulbalispa_kawit/"><img src={Instagram} /></a></li>
                            <li><a target="_blank" href="https://www.tiktok.com/@blissfulbalikawit"><img src={Tiktok} /></a></li>
                        </ul>
                    </div>
                    <p className='policy'>
                        Copyright © Maison`D 2025. All rights reserved. Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer;