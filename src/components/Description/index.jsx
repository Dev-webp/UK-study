import './style.css';
import { useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { slideUp, opacity } from './animation';

const logos = [
    '/images/middlesex-slide.png',
    '/images/queens-slide.png',
    '/images/chester-logo.png',
    '/images/UniWestScotland-logo.png',
    '/images/south-bank-university-logo.png',
    '/images/uwe-slide.png',
    '/images/essex-logo.png',
    '/images/Cumbria-logo.png',
    '/images/uow-shield-logo.png',
    '/images/bath-resized_1.png',
    '/images/Wrexham-logo_2.png'
];

export default function Index() {
    const phrase = "Your Path Way to Studying in the UK";
    const description = useRef(null);
    const logoContainerRef = useRef(null);
    const isInView = useInView(description);

    useEffect(() => {
        // Mouse parallax effect for logos
        const logoItems = gsap.utils.toArray('.logoItem');
        logoItems.forEach((item) => {
            item.addEventListener('mousemove', (e) => {
                const { width, height, left, top } = item.getBoundingClientRect();
                const x = e.clientX - left - width / 2;
                const y = e.clientY - top - height / 2;
                gsap.to(item, {
                    duration: 0.5,
                    x: x * 0.1,
                    y: y * 0.1,
                });
            });
            item.addEventListener('mouseleave', () => {
                gsap.to(item, { duration: 0.5, x: 0, y: 0 });
            });
        });

        // Scroll effect for h1
        gsap.fromTo(
            '.logoSlider h1',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: logoContainerRef.current,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: true,
                },
            }
        );
    }, []); // Empty dependency array to ensure this runs only once

    return (
        
            <div ref={description} className="description">
                <div className="body">
                    <p>
                        {
                            phrase.split(" ").map((word, index) => {
                                return (
                                    <span key={index} className="mask">
                                        <motion.span 
                                            variants={slideUp} 
                                            custom={index} 
                                            animate={isInView ? "open" : "closed"} 
                                            key={index}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                );
                            })
                        }
                    </p>
                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> 
                    At VJC Overseas, we are your trusted partners in achieving your immigration dreams. Our dedicated team ensures a seamless journey, helping clients transform their lives through successful immigration.
                    </motion.p>
                </div>  

                {/* Image Slider */}
                <div className="logoSlider" ref={logoContainerRef}>
                    <h1>Partnered Universities <span className='mob'> for Your Academic Journey</span></h1>
                    <div className="logoContainer">
                        {/* Render logos three times for infinite scroll */}
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div className="logoItem" key={index}>
                                <img src={logo} alt={`University Logo ${index + 1}`} className="logoImage" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        
    );
}
