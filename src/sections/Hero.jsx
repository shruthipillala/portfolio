import React from "react";
import { motion } from "framer-motion";//Enable animation on HTML tag
import "../styles/styles.css";
import { div, i, section } from "framer-motion/client";
import { TypeAnimation } from 'react-type-animation';
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import QuickFacts from "./QuickFacts";
import WhatIDo from "./WhatIdo";
import { Link } from "react-router-dom";



function Hero() {
    return (
        <div>
            {/* <GradientBackground > */}
            <section id="hero-section" className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        > Hi, I'm Shruthi Pillala</motion.h1>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer', 1500,
                                    'React.js Developer', 1500,
                                    'Java Developer', 1500,
                                    'Full Stack Developer', 2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.h2>
                        <motion.div className="hero-text"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}

                        >
                            <p align="center" className="hero-text-p">
                                I enjoy turning complex problems into clean, efficient, and user-friendly web experiences.
                                <br />
                            </p>

                            <p align="center" style={{ fontSize: "1rem" }}>
                                Previously at <a
                                    href="https://www.tcs.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="name-highlight-copmany"
                                >
                                    TCS
                                </a>
                            </p>

                        </motion.div>
                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >

                            <a href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                                target="_blank" rel="noopener noreferrer" className="hero-btn">
                                View Resume
                            </a>
                            <Link to="/contact" className="hero-btn outline">
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>
                    {/* <motion.div className="hero-img"
                        initial={{ x: 100, opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    ><img src={profile1} alt="My Picture" />

                    </motion.div> */}
                    <div className="hero-img-wrapper">
                        <div className="img-bg-shape" />
                        <motion.img
                            src={profile1}
                            alt="Profile"
                            className="hero-img"
                            initial={{ opacity: 0, scale: 0.5, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    </div>

                </div>

            </section>

            <WhatIDo />
            <QuickFacts />

        </div>

    );
};
export default Hero;