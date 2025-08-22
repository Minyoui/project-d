import './gallery.css';
import { useEffect, useRef, useState } from 'react';

//video
import Video1 from '../../../../assets/videos/maison-d-vid1.mp4';
import Video2 from '../../../../assets/videos/maison-d-vid2.mp4';

function Gallery () {
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
            <div className='gallery-section'>
                <div ref={sectionRef} className={`gallery-header ${inView? 'animate' : ''}`}>
                    <h1>
                        Experience Serenity
                    </h1>
                    <p>
                        A glimpse into our tranquil sanctuary
                    </p>
                </div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        ref={sectionRef}
                        className={`video ${inView? 'animate' : ''}`}
                    >
                        <source src={Video1} type="video/mp4"/>
                    </video>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        ref={sectionRef}
                        className={`video ${inView? 'animate' : ''}`}
                    >
                        <source src={Video2} type="video/mp4"/>
                    </video>
            </div>
        </>
    )
}

export default Gallery;