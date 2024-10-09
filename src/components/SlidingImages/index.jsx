import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './slider.css'; // Import the updated CSS file
import { 
    FaBusinessTime, 
    FaLaptopCode, 
    FaUserMd,  
    FaArtstation, 
    FaLeaf, 
    FaBrain, 
    FaMagento,
    FaLandmark
} from 'react-icons/fa';

const courses1 = [
    { title: "Business and Management", icon: <FaBusinessTime />, description: "Learn about business principles and management strategies." }, 
    { title: "Engineering", icon: <FaMagento />, description: "Explore engineering concepts and design innovative solutions." }, 
    { title: "Computer Science", icon: <FaLaptopCode />, description: "Study programming, algorithms, and data structures." }, 
    { title: "Medicine and Health Sciences", icon: <FaUserMd />, description: "Discover the fundamentals of medicine and healthcare." }
];

const courses2 = [
    { title: "Law", icon: <FaLandmark />, description: "Understand legal principles and the justice system." }, 
    { title: "Arts and Humanities", icon: <FaArtstation />, description: "Delve into various forms of art and human culture." }, 
    { title: "Environmental Science", icon: <FaLeaf />, description: "Study the environment and sustainable practices." }, 
    { title: "Psychology", icon: <FaBrain />, description: "Explore the human mind and behavior." }
];

export default function Index() {
    const container = useRef(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]); // Horizontal translation for first course
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Horizontal translation for second course

    // Mouse down event to start dragging
    const handleMouseDown = (e, slider) => {
        setIsDragging(true);
        setStartX(e.pageX - slider.current.offsetLeft);
        setScrollLeft(slider.current.scrollLeft);
    };

    // Mouse move event to scroll slider
    const handleMouseMove = (e, slider) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast by multiplying walk
        slider.current.scrollLeft = scrollLeft - walk;
    };

    // Mouse up and leave event to stop dragging
    const stopDragging = () => {
        setIsDragging(false);
    };

    const handleScroll = () => {
        const slider = slider1.current;
        const totalWidth = slider.scrollWidth / 2; // Since we are using duplicate content
        if (slider.scrollLeft >= totalWidth) {
            slider.scrollLeft = 0;
        }
    };

    // Set up the scroll event listener to handle the infinite scroll
    useEffect(() => {
        const slider = slider1.current;
        slider.addEventListener('scroll', handleScroll);

        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll2 = () => {
        const slider = slider2.current;
        const totalWidth = slider.scrollWidth / 2; // Since we are using duplicate content
        if (slider.scrollLeft >= totalWidth) {
            slider.scrollLeft = 0;
        }
    };

    // Set up the scroll event listener to handle the infinite scroll
    useEffect(() => {
        const slider = slider2.current;
        slider.addEventListener('scroll', handleScroll2);

        return () => {
            slider.removeEventListener('scroll', handleScroll2);
        };
    }, []);

    return (
        <div>
            {/* Heading */}
            <h2 className="heading">POPULAR COURSES TO STUDY IN THE UK</h2>

            {/* Scrollable Courses Section */}
            <div ref={container} className="slidingContents">
                <motion.div
                    ref={slider1}
                    onMouseDown={(e) => handleMouseDown(e, slider1)}
                    onMouseMove={(e) => handleMouseMove(e, slider1)}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    style={{ x: x1 }}
                    className="slider"
                >
                    {courses1.concat(courses1).map((course, index) => ( // Duplicating the courses for infinite scroll
                        <div key={index} className="course">
                            <div className="courseIcon">{course.icon}</div>
                            <h4 className="courseTitle">{course.title}</h4>
                            <p className="courseDescription">{course.description}</p>
                        </div>
                    ))}
                </motion.div>
                
                <motion.div
                    ref={slider2}
                    onMouseDown={(e) => handleMouseDown(e, slider2)}
                    onMouseMove={(e) => handleMouseMove(e, slider2)}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    style={{ x: x2 }}
                    className="slider"
                >
                    {courses2.concat(courses2).map((course, index) => ( // Duplicating the courses for infinite scroll
                        <div key={index} className="course">
                            <div className="courseIcon">{course.icon}</div>
                            <h4 className="courseTitle">{course.title}</h4>
                            <p className="courseDescription">{course.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
