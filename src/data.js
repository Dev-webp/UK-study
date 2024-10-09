import { color } from 'framer-motion';
import {  FaRegHandshake, FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaFileAlt, FaRegUser, FaRegClock, FaGlobe  } from 'react-icons/fa';

export const features = [
  {
    icon: <FaBookOpen />,  // Icon for "Comprehensive Visa Application Assistance"
    title: "Comprehensive Visa Assistance",
  }, 
  {
    icon: <FaFileAlt />,  // Icon for "Expert Consultation and Document Preparation"
    title: "Expert Consultation and Document Preparation",
  },

  {
    icon: <FaRegHandshake />,  // Icon for "Transparent Guidance and Support"
    title: "Transparent Guidance and Support",
  },
 
  {
    icon: <FaRegUser />,  // Icon for "Commitment to Excellence"
    title: "Commitment to Excellence",
  },

  {
    icon: <FaChalkboardTeacher />,  // Icon for "In-Depth Knowledge of UK Study Requirements"
    title: "In-Depth Knowledge of UK Study Requirements",
  },
  {
    icon: <FaUserGraduate />,  // Icon for "Personalized Visa Solutions"
    title: "Personalized Visa Solutions",
  },

];



export const projects = [
  {
    title: "Documents Required",
    description: (
        <ul>
            <li>Educational documents (10th, 12th, Bachelors-PC, CMM, Individuals)</li>
            <li>Experience certificates (if any)</li>
            <li>IELTS/PTE/GRE score card (if any)</li>
            <li>Passport bio pages</li>
            <li>SOP (Required for Universities)</li>
            <li>LORs (Required for Universities)</li>
            <li>Updated resume</li>
            <li>MOI</li>
        </ul>
    ),
    src: "doc.jpg",
    link: "",
    color: "#9B9B9B"
},

  {
    title: "Visa time period",
    description:(
      <ul>
          <li>Regular Visa: 1 to 15 working days</li>
          <li>Priority Visa: 1 to 5 working days</li>
          <li>Super Priority Visa: 24 hours</li>
          <li>Potential Delays: May occur due to high application volume</li>
          <li>Weekends/Holidays: Not counted in processing time</li>
          <li>Biometric Appointment: Schedule promptly to avoid delays</li>
          <li>Complex Applications: May require additional processing time</li>
      </ul>
    ),
    
    src: "time.jpg",
    link: "",
    color: "#977F6D"
    // color: "#9B9B9B"
  },
  {
    title: "Visa Fees Structure",
    description: (
      <ul>
          <li>Regular visa—32,000/- Approx</li>
          <li>Priority—51,000/- Approx</li>
          <li>Super Priority—1,20,000/- Approx</li>
          <li>Health Surcharges—60,000/- Approx</li>
      </ul>
    ),
    src: "fee.jpg",
    link: "",
    // color: "#C2491D",
    color: "#9B9B9B"
  },
  {
    title: "Our Services",
    description: (
      <ul>
          <li>Counseling</li>
          <li>Visa slot booking</li>
          <li>Medical Assistance</li>
          <li>Apply for admission</li>
          <li>Visa application filling</li>
          <li>Guidance for visa documents</li>
          <li>Support for References & SOP</li>
          <li>Pre-departure orientation/briefing</li>
          <li>University admits guarantee (100%)</li>
          <li>Bank Loan / Savings / FD Assistance</li>
          <li>Within one week to get the admission</li>
          
      </ul>
    ),
    
    src: "service.jpg",
    link: "",
    // color: "#B62429",
    color: "#977F6D"
  },
  // {
  //   title: "",
  //   description: "",
  //   src: "",
  //   link: "",
  //   color: ""
  // }
];



export const ourDiffFeatures = [
  {
    icon: <FaChalkboardTeacher size={68} />, // Expert Visa Application Guidance icon
    title: "Expert Visa Guidance",
    des: "Navigate the complexities of the UK study visa process with personalized guidance from our experienced team.",
  },
  {
    icon: <FaRegClock size={68} />, // Fast & Reliable Processing icon
    title: "Fast & Reliable Processing",
    des: "Get your UK study visa processed smoothly and quickly with our proven strategies, ensuring timely submission.",
  },
  {
    icon: <FaGlobe size={68} />, // Global Reach & Support icon
    title: "Global Reach & Support",
    des: "Our services help students from around the world secure their study visas, ensuring a seamless experience.",
  },
];





