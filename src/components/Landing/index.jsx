import { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import Link from 'next/link';
import './Landing.css';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const background = useRef(null);

  let xPercent = 0;
  let direction = -1;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    if (window.innerWidth <= 768) {
      window.location.href = 'tel:9160449000';
    } else {
      window.location.href = 'mailto:info@vjcoverseas.com';
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.age) validationErrors.age = "Age is required";
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits";
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSd7dukY6pGPgDKaT7sQ8TBvpp2P9yvvWG51qkaS7-1mJ2H_vA/formResponse?entry.645264443=${encodeURIComponent(formData.name)}&entry.55947832=${encodeURIComponent(formData.age)}&entry.2067913212=${encodeURIComponent(formData.email)}&entry.1053805995=${encodeURIComponent(formData.phone)}&entry.1117842007=${encodeURIComponent(formData.message)}`;

    try {
      // Send a GET request to the Google Forms URL
      const response = await fetch(googleFormURL, {
        method: 'GET',
        mode: 'no-cors'
      });

      // Show success message
      setIsSubmitted(true);

      // Reset form fields
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(background.current, {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: background.current,
        scrub: true,
        start: 'top top',
        end: 'bottom top',
      },
    });

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-500px',
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  

  return (
    <motion.main initial="initial" animate="enter" className="landing">
      <div ref={background} className="backgroundImage">
        <Image src="/images/background3.jpg" fill={true} alt="background" />
      </div>

      <div className="nav">
        <div className="topLeftImage">
          <Image src="/images/logo-1.png" alt="Logo 1" width={70} height={60} />
          <Image src="/images/logo-2.png" alt="Logo 2" width={140} height={60} />
        </div>
        <div className="navLinks">
          <a href="#eligibility" onClick={() => scrollToSection('about')}>Eligibility</a>
          <a href="#documents" onClick={() => scrollToSection('pathway')}>Documents</a>
          <a href="#consultation" onClick={() => scrollToSection('consult')}>Consultation</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Our Services</a>
        </div>
        <button className="contactButton" onClick={handleContactClick}>
          Contact
        </button>
      </div>

      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <div className="formContainer">
            <h1 className="centeredHeading">Let&apos;s Ignite Your<br /> UK Dreams!</h1>
            
            {isSubmitted && <p className="successMessage">Form submitted successfully!</p>}
            
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="name"
                  placeholder={errors.name ? errors.name : "Name"}
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'errorInput' : ''}
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="number"
                  name="age"
                  placeholder={errors.age ? errors.age : "Age"}
                  value={formData.age}
                  onChange={handleChange}
                  className={errors.age ? 'errorInput' : ''}
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="email"
                  name="email"
                  placeholder={errors.email ? errors.email : "Email"}
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'errorInput' : ''}
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder={errors.phone ? errors.phone : "Phone Number"}
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  minLength={10}
                  className={errors.phone ? 'errorInput' : ''}
                />
              </div>

              <div className="inputWrapper">
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="message"
                />
              </div>
              
              <br/>
              <div>
                <button type="submit">SUMBIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="description">
        
      <div className="uk-container">
    {/* <img src="/images/uk.png" alt="Top image" className="top-image" /> */}
    <div className="uk">UK</div>
  </div><div className="inside">Ambition Meets Opportunity</div>
        <p><PiAirplaneTakeoffFill /> World-Class Education</p>
        <p><PiAirplaneTakeoffFill /> Cultural Diversity</p>
        <p><PiAirplaneTakeoffFill /> Shorter Courses</p>
        <p><PiAirplaneTakeoffFill /> Research Opportunities</p>
        <p><PiAirplaneTakeoffFill /> Scholarships and Financial Aid</p>
        <p><PiAirplaneTakeoffFill /> Rich History and Culture</p>
      </div>
    </motion.main>
  );
}
