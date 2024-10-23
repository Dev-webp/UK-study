'use client'

import React, { useEffect, useRef } from 'react';
import './OurDiff.css';
import { ourDiffFeatures } from '../../data';
import { FaChalkboardTeacher, FaRegClock, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurDiff = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    // Falling effect using GSAP
    gsap.from(featureRefs.current, {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: featureRefs.current,
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
      }
    });

    // Mouse parallax effect for icons
    featureRefs.current.forEach((feature, index) => {
      gsap.to(feature.querySelector('.feature-icon'), {
        x: (i) => Math.sin(i) * 10, // Sine-based horizontal shake effect
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
      });
    });
  }, []);

  return (
    <section id='consult'>
    <div className='od-wrapper'>
      <div className='container'>
        <div className='od-container'>
          <div className='od-head'>
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className='tag'>BEST Consultation</motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className='title'>Visa Consultancy Services - VJC Overseas</motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              variants={desVariants}
              className='text'>
             Discover why we are the most trusted visa consultants in India. Our team is ready to provide you with world-class services customized to your profile. Connect with VJC Overseas and take the first step towards a brighter future!
            </motion.span>
          </div>

          <div className='od-features'>
            {
              ourDiffFeatures.map((feature, i) =>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={containerVariants((i+1) * 0.1)}
                  key={i}
                  className='od-feature'
                  ref={el => featureRefs.current[i] = el} // Store each feature in refs array
                >
                  <div className='feature-icon'>{feature.icon}</div>
                  <span className='sec-title'>{feature.title}</span>
                  <span className='text'>{feature.des}</span>
                </motion.div>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default OurDiff;
