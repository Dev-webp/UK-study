'use client';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import AboutUs from '@/components/AboutUs/AboutUs';
import Description from '../components/Description';
import Testtesxt from '../components/Texttest';
import OurDiff from '@/components/OurDiff/OurDiff';
import SlidingImages from '../components/SlidingImages';
import University from '../components/University';
import Contact from '../components/Contact';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Locomotive Scroll initialization
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <AboutUs />
      <Description />
      <Testtesxt />
      <OurDiff/>
      <SlidingImages />
      <University />
      <Contact />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9160449000?text=Need%20more%20details"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="Chat with us on WhatsApp"
      >
        <AiOutlineWhatsApp size={40} />
      </a>
    </main>
  );
}
