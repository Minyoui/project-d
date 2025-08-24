import './about-hero.css';

// Business
import Logo from '../../../../assets/business/MD-Logo.svg';
import Team from '../../../../assets/business/maison-team.png';

function AboutHero () {
    return (
        <>
            <div className='about-hero-section'>
                <img src={Logo} alt="Maison`D" />
                <p>
                    OUR STORY BEGINS WITH YOUR SERENITY
                </p>
            </div>
        </>
    )
}

export default AboutHero;