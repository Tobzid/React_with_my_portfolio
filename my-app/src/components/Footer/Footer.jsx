import React from "react";
import "./Footer.css";
import { CiLinkedin } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div>
        <h2>Tobzid</h2>

        <div className="footconnect">
          <a href="#about">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footersocialmedia">
          <a href="https://instagram.com" rel="noreferrer" target="_blank" aria-label="Instagram">
            <AiFillInstagram />
          </a>
          <a href="https://linkedin.com" rel="noreferrer" target="_blank" aria-label="LinkedIn">
            <CiLinkedin />
          </a>
          <a href="https://facebook.com" rel="noreferrer" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://github.com" rel="noreferrer" target="_blank" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} TandT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;