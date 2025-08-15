import './about.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// other imgs
import  Leaves from '../../../../assets/business/MD-leaves.png';
import AboutImg from '../../../../assets/business/MD-about-img.png';

function About () {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.3 } // 30% of element is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className='about-wrapper'>
                <div ref={sectionRef} className={`about-container ${inView? 'animate' : ''}`}>
                    <h1>Experience Calm, Curated with Luxurious Care</h1>
                    <div className='abt-line'/>
                    <p>Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate</p>   
                </div>
                <Link to="/" ref={sectionRef} className={`about-link ${inView? 'animate' : ''}`}>
                    <img src={AboutImg} className='sample-photo' alt='Sample Photo'/>
                </Link>
            </div>
        </>
    )
}

export default About;