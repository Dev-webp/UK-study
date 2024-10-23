import { color } from 'framer-motion';
import {  FaRegHandshake, FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaFileAlt, FaRegUser, FaRegClock, FaGlobe  } from 'react-icons/fa';

export const features = [
  {
    icon: <FaBookOpen />,  // Icon for "Comprehensive Visa Application Assistance"
    title: "Travel Documentation ",
  }, 
  {
    icon: <FaFileAlt />,  // Icon for "Expert Consultation and Document Preparation"
    title: "CAS Documentation"
  },

  {
    icon: <FaRegHandshake />,  // Icon for "Transparent Guidance and Support"
    title: "Financial Evidence",
  },
 
  {
    icon: <FaRegUser />,  // Icon for "Commitment to Excellence"
    title: "Health Requirements",
  },

  {
    icon: <FaChalkboardTeacher />,  // Icon for "In-Depth Knowledge of UK Study Requirements"
    title: "Consent Requirements",
    des:"(if you’re under 18)"
  },
  {
    icon: <FaUserGraduate />,  // Icon for "Personalized Visa Solutions"
    title: "Biometric Requirements",
  },

];



export const projects = [
//   {
//     title: "Documents Required",
//     description: (
//         <ul>
//             <li>Educational documents (10th, 12th, Bachelors-PC, CMM, Individuals)</li>
//             <li>Experience certificates (if any)</li>
//             <li>IELTS/PTE/GRE score card (if any)</li>
//             <li>Passport bio pages</li>
//             <li>SOP (Required for Universities)</li>
//             <li>LORs (Required for Universities)</li>
//             <li>Updated resume</li>
//             <li>MOI</li>
//         </ul>
//     ),
//     src: "doc.jpg",
//     link: "",
//     color: "#ffffff"
// },

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
    color: "#ffffff"
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
    src: "1.png",
    link: "",
    // color: "#C2491D",
    color: "#ffffff"
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
          
      </ul>
    ),
    
    src: "2.png",
    link: "",
    // color: "#B62429",
    color: "#ffffff"
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
    des: "Get easy support from our experienced team to navigate the UK study visa process.",
  },
  {
    icon: <FaRegClock size={68} />, // Fast & Reliable Processing icon
    title: "Fast & Reliable Processing",
    des: "We use proven strategies to ensure your UK study visa is submitted on time.",
  },
  {
    icon: <FaGlobe size={68} />, // Global Reach & Support icon
    title: "Global Reach & Support",
    des: "Our services assist students globally in securing their study visas easily.",
  },
];





