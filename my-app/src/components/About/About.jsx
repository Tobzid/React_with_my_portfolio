import "./About.css";
import React, { useState, useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import profileImage from "../Photos/Tobzid.jpeg";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

// Polyfill global for react-odometerjs (placed AFTER all imports)
if (typeof window !== "undefined") {
  window.global = window;
}

function About({ onScrollClick }) {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExperience(5);
      setProjects(150);
      setClients(2.5);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="AboutContDiv" id="about">
        <div className="aboutBox">
          {/* Left Column */}
          <div className="aboutDivOne">
            <p>Welcome to my world</p>
            <h1>
              Hi, I'm <span id="aboutName">Tobzid Adeleye</span>
              <br /> a Data Analyst & Frontend Developer
            </h1>
            <p>
              Experienced frontend developer with a passion for creating visually
              stunning and user-friendly websites.
            </p>

            <div className="aboutBtnDiv">
              <button
                className="aboutBtnOne"
                onClick={() =>
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              > 
                CONTACT ME
              
              </button>

              <a href="my-cv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="aboutBtnTwo">DOWNLOAD CV</button> </a>
            </div>

            <div className="aboutsocialmedia">
              <a
                href="https://instagram.com"
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://linkedin.com"
                rel="noreferrer"
                target="_blank"
                aria-label="LinkedIn"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://facebook.com"
                rel="noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="aboutDivTwo">
            <div className="ImageInaboutTwo">
              <img src={profileImage} alt="Tobzid Adeleye Profile" />
            </div>

            <div className="exeprienceDiv">
              <p className="whatIdoP">
                Transforming raw data into actionable insights and building
                clean, responsive web experiences.
              </p>

              <div className="DivWithOdo">
                <div className="fact__item">
                  <div className="firstOdo">
                    <Odometer value={experience} className="Odotitle" />
                    <h3 className="title">+</h3>
                  </div>
                  <p className="label">Years of Experience</p>
                </div>

                <div className="fact__item">
                  <div className="firstOdo">
                    <Odometer value={projects} className="Odotitle" />
                    <h3 className="title">k+</h3>
                  </div>
                  <p className="label">Completed Projects</p>
                </div>

                <div className="fact__item">
                  <div className="firstOdo">
                    <Odometer value={clients} className="Odotitle" />
                    <h3 className="title">k+</h3>
                  </div>
                  <p className="label">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="aboutBtnScroll" onClick={onScrollClick}>
          Scroll Down
        </button>
      </div>
    </div>
  );
}

export default About;