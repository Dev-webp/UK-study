"use client";

import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { features } from '../../data';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiAirplaneTakeoffFill } from "react-icons/pi";

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
              <span className='why'>UK Student Visa </span>
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'>
              {" "}
              To apply for a UK study visa, you need to be 16 or older and have an offer from a licensed student sponsor. Key UK study visa requirements include having enough money to support yourself and demonstrating English language proficiency.
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'>
                You can apply for the visa up to 6 months before your course starts. The UK study visa cost is £490, along with a healthcare surcharge based on your visa duration.
             </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className='title'>
                After completing your studies, you may extend your UK study visa or switch to a Graduate visa in the UK. If you're 16 or 17 and want to study at an independent school, consider the UK student visa for independent school students.
             </motion.span>
          </div>

          <motion.div
  ref={supportRef}
  initial="offscreen"
  whileInView={"onscreen"}
  variants={containerVariants(0.1)} // Apply the same transition variants
  className='au-support'
>
  <div>
    <motion.span
      initial="offscreen"
      whileInView={"onscreen"}
      variants={titleVariants} // Title animation
      className='t-title'>
      Essential Steps for Studying in the UK
    </motion.span>

<motion.span
  initial="offscreen"
  whileInView={"onscreen"}
  variants={desVariants} // Description animation
  className='des2'>
  <PiAirplaneTakeoffFill className="feature-icon" /> {/* Icon */}
  For Studying in the UK, you must have an unconditional offer from a licensed student sponsor. After receiving your offer, your education provider will issue a Confirmation of Acceptance for Studies (CAS), which is essential for your visa application.
</motion.span>

<motion.span
  initial="offscreen"
  whileInView={"onscreen"}
  variants={desVariants} // Description animation
  className='des2'>
  <PiAirplaneTakeoffFill className="feature-icon" /> {/* Icon */}
  You can pursue various eligible courses, including full-time programs at RQF levels 3 to 8, part-time qualifications above degree level, and recognized foundation programs for postgraduate doctors and dentists.
</motion.span>

<motion.span
  initial="offscreen"
  whileInView={"onscreen"}
  variants={desVariants} // Description animation
  className='des2'>
  <PiAirplaneTakeoffFill className="feature-icon" /> {/* Icon */}
  Additionally, students can enroll in English language courses at level B2 or higher. If you are researching sensitive topics at RQF level 7 or above, you may also need to obtain an Academic Technology Approval Scheme (ATAS) certificate.
</motion.span>



  </div>
</motion.div>
<div id='pathway' className='req'>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className='sec-title'>Required Documentation
              </motion.span>
              </div>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='text'>
                Necessary Documents You Need for Visa Application
              </motion.span>
              
          <div className='au-blocks' >
          
            <div className='au-block'>
              
              
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
              {/* <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className='sec-title'>Required Documentation
              </motion.span> */}
              {/* <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='text'>
                Necessary Documents You Need for Visa Application
              </motion.span> */}
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
                      {/* <span className='if'>{feature.des}</span> */}
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
