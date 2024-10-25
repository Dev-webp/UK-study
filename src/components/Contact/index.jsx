import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from "react-icons/fa6"; // Importing social media icons
import Magnetic from '../../common/Magnetic';
import './style.css';

export default function Index() {
    // const container = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "end end"]
    // });
    // const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
    // const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

    return (
        <motion.div className="contact">
            <div className="body">
                <div className="title">
                    <span>
                        <div className="imageContainer">
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/images/Final Logo.png`}
                            />
                        </div>
                        <h2>Lets work together</h2> 
                    </span>
                    <motion.div className="buttonContainer">
                        <Rounded backgroundColor={"#ffffff"} className="button">
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                </div>
                {/* Added a gap between the info and other sections */}
                <div className="nav">
                    <Rounded>
                        <p>
                           <span className='con'> VJC OVERSEAS (Hyderabad) </span><br />
                            62/A, Ground Floor,<br />
                            Sundari Reddy Bhavan, Fresh Mart,<br />
                            Sanjeeva Reddy Nagar,<br />
                            Hyderabad, Telangana<br />
                            500038<br />
                            <span className='con'>CONTACT: +91 9160449000</span>
                        </p>
                    </Rounded>
                    <Rounded>
                        <p>
                           <span className='con'> VJC OVERSEAS (Bangalore) </span><br />
                            Raheja Arcade, 16 & 17,<br />
                            5th Block, Ground Floor,<br />
                            Koramangala,<br />
                            Bangalore, India<br />
                            560095<br />
                            <span className='con'>CONTACT: +91 8970667999</span>
                        </p>
                    </Rounded>
                </div>
                {/* Contact and social media sections */}
                <div className="contactSection">
                    <div className="mailSection">
                        <span>
                            <h3>Mail to :</h3>
                            <a href="mailto:info@vjcoverseas.com" className="mailLink">info@vjcoverseas.com</a>
                        </span>
                        <span>
                            <a href="mailto:vjcbangalore@gmail.com" className="mailLink">vjcbangalore@gmail.com</a>
                        </span>
                    </div>
                    <div className="socialSection">
                        <span>
                            <h3>Follow us on:</h3>
                            <div className="socialIcons">
                                <a href="https://www.instagram.com/vjc_overseas_bangalore/?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw%3D%3D" target="_blank" rel="noopener noreferrer"  aria-label="Visit our Instagram page">
                                    <FaInstagram className="icon" />
                                </a>
                                <a href="https://www.youtube.com/@vjcoverseas9434" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel">
                                    <FaYoutube className="icon" />
                                </a>
                                <a href="https://www.linkedin.com/company/vjc-overseas/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
                                    <FaLinkedinIn className="icon" />
                                </a>
                                <a href="https://twitter.com/vjcoverseas" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
                                    <FaXTwitter className="icon" />
                                </a>
                                <a href='https://www.facebook.com/VJCOVERSEAS/' target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                                    <FaFacebook className='icon' />
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="info">
                    <span>
                        {/* Other content can go here */}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
