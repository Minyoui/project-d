import './sub-hero.css';
import TextType from '../../context/react-bits/TextType/TextType';

function SubHero () {
    return (
        <>
            <div className='sub-hero-wrapper'>
                <div className='inner-wrapper'>
                    <p>The Most</p>
                    <p><TextType 
                        text={["Trusted", "Relaxing", "Affordable"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={false}
                        cursorCharacter="|"
                    /></p>
                    <p>Spa in Kawit, Cavite</p>
                </div>
            </div>
        </>
    )
}

export default SubHero;