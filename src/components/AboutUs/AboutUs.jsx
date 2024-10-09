"use client";

import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { features } from '../../data';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const blocksRef = useRef([]);
  const containerRef = useRef(null);
  const supportRef = useRef(null); // Create a ref for the au-support section

  useEffect(() => {
    // Mousemove parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = containerRef.current;
      const xPos = (clientX / offsetWidth) - 0.5;
      const yPos = (clientY / offsetHeight) - 0.5;

      // Apply slight parallax to all blocks
      blocksRef.current.forEach((block) => {
        gsap.to(block, {
          x: xPos * 30,  // Move blocks horizontally based on cursor
          y: yPos * 30,  // Move blocks vertically based on cursor
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Add scroll trigger for fade in and slide up effect for blocks
    blocksRef.current.forEach((block) => {
      gsap.fromTo(block, 
        { y: 50, opacity: 0 }, // Initial state
        {
          y: 0, 
          opacity: 1,
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            stagger: 0.2,
          },
        }
      );
    });

    // Animation for the au-support section
    gsap.fromTo(supportRef.current, 
      { y: 50, opacity: 0 }, // Initial state: translate down and invisible
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: supportRef.current,
          start: "top 80%", // Trigger when the section is 80% from the top of the viewport
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id='about'>
    <div className='au-wrapper' ref={containerRef}>
      <div className='container'>
        <div className='au-container'>
          <div className='au-head'>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className='tag'>
              <span className='why'>WHY </span>CHOOSE VJC
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'>
              {" "}
              There are many reasons to study in UK and being the top UK CONSULTANCIES IN INDIA <br />  we advise all students to make that next big step in your life and study in the UK.
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className='title'>
              UK is the home to over 130 Universities and provides a wide variety of courses to international students.
            </motion.span>
          </div>

          <div className='au-blocks'>
            <div className='au-block'>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className='sec-title'>Our Capabilities
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='text'>
                Our ideas, creativity & thoughtful executions
              </motion.span>
              <div className='block-features'>
                {
                  features.slice(0, 3).map((feature, i) => (
                    <motion.div
                      ref={el => blocksRef.current[i] = el} // Assign ref to each block
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className='block-feature'
                      key={i}>
                      <span>{feature.icon}</span>
                      <span>{feature.title}</span>
                    </motion.div>
                  ))
                }
              </div>
            </div>

            <div className='au-block'>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className='sec-title'>Our Standards
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='text'>
                Ensuring a seamless and successful application experience
              </motion.span>
              <div className='block-features'>
                {
                  features.slice(3, 6).map((feature, i) => (
                    <motion.div
                      ref={el => blocksRef.current[i + 3] = el} // Assign ref to each block
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className='block-feature'
                      key={i}>
                      <span>{feature.icon}</span>
                      <span>{feature.title}</span>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>

          <div ref={supportRef} className='au-support'>
            <div>
              <span className='t-title'>Our Principles</span>
              <span className='des2'>
                At VJC Overseas, we redefine how students embark on their UK education journey by providing guidance, personalized support, and expert advice to make the application process smooth and successful.
              </span>
            </div>

            <div>
              <span className='text'>
                We research, solve, analyze, and develop strategies to meet the unique needs of each student. Our primary goal is not just to assist our clients but to design a pathway for their educational success.
              </span>
              <span className='text'>
                Our commitment extends beyond visa assistance. We offer continuous support, 24/7, ensuring students feel empowered and confident as they prepare for their future in the UK.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
