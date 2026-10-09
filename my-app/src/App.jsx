import About from "./components/About/About";
import React, { useRef } from "react";;
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Project/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skill/Skill";
import Testimonials from "./components/Testimonies/Testimonies";
import Contacts from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ReactGA from 'react-ga4';

// Initialize with your copied Measurement ID
ReactGA.initialize('G-6RY9D79EDT');

// Send a pageview hit
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });




function App() {

// 1. reference for the target section
  const servicesRef = useRef(null);

  // 2. Function to trigger the smooth scroll
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* your components */}

<Navbar/>
<About onScrollClick={scrollToServices}/>
<div ref={servicesRef}>
<Services/>
</div>
<Projects/>
<Skills/>
<Testimonials/>
<Contacts/>
<Footer/>

    </div>
  );
}

export default App;