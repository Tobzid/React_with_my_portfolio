// ✅ Clean, single-line imports
import { MdOutlineManageHistory, MdWeb, MdOutlineDatasetLinked } from "react-icons/md";
import { IoBusiness, IoWifiSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import programManagerImg from "../photos/Programmanager.avif";
import businessimage from "../photos/Businessanalyst.avif";
import dataimage from "../photos/dataanalyst.avif";
import webimage from "../photos/webdevelop.avif";
import marketStrategistImg from "../photos/Marketstragist.avif";
import organizationImg from "../photos/Organization.avif";

// src/components/dataFolder/portfolioData.jsx
import { FaJs, FaReact, FaBootstrap, FaDatabase, FaFileExcel } from "react-icons/fa";
import { SiPython, } from "react-icons/si";

// , SiPowerBI, SiTableau

export const ability =[ {id: 1,
    icon : <MdOutlineManageHistory />,
  name: "Program Manager",
  image: businessimage,
 role: "Cross-project Coordination",
  content: "Connecting strategy, data, and technology to deliver complex technical projects on time and within scope. I streamline workflows, foster cross-functional collaboration, and leverage real-time analytics to keep initiatives on track and aligned with business goals.",
},

{id: 2,
    icon : <IoBusiness />,
  name: "Business Analyst",
  image: dataimage ,
role: "Strategy Formulation",
  content: "I evaluate operations, analyze performance metrics, and formulate high-impact strategies that identify revenue opportunities, reduce inefficiencies, and drive long-term competitive advantage, Uncovering hidden value within organizational processes and market shifts.",
},


{id: 3,
    icon : <MdWeb />,
    image: webimage,
  name: "Web Developer",
 role: "Mobile App Development",
  content: "Turning complex datasets into clear, actionable business intelligence. I extract hidden trends, build intuitive visual dashboards, and deliver data-backed recommendations that eliminate guesswork and fuel smarter decision-making",
},


{id: 4,
    icon : <MdOutlineDatasetLinked />,
    image: organizationImg,
  name: "Data Analyst",
 role: "Performance Identification and Process Improvement",
  content: "Optimizing operations through data-driven performance monitoring. I analyze workflow bottlenecks, identify key efficiency drivers, and implement targeted metrics that streamline processes, boost productivity, and drive continuous organizational growth",
},

{id: 5,
    icon : <IoWifiSharp />,
  name: "Marketing",
  image: marketStrategistImg,
 role: "Marketing and Growth Strategist",
  content: "Combining audience insights with web technology to build campaigns that convert. I leverage performance data and modern web experiences to optimize user acquisition, elevate brand presence, and deliver measurable ROI",
},

{id: 6,
    icon : <GrUserExpert />,
    image: programManagerImg,
  name: "Experience",
 role: "Data driven and Result Oriented",
  content: "Designing intuitive, data-informed user experiences that bridge visitor needs with business objectives. I analyze user behavior patterns and craft seamless web interactions to maximize engagement, improve retention, and drive conversion",
}


];

 
export const skillsData = [
  {
    category: "Frontend & Web",
    skills: [
      { name: "JavaScript", icon: <FaJs />, level: "Advanced" },
      { name: "React", icon: <FaReact />, level: "Advanced" },
      { name: "Bootstrap", icon: <FaBootstrap />, level: "Advanced" }
    ]
  },
  {
    category: "Data & Programming",
    skills: [
      { name: "Python", icon: <SiPython />, level: "Advanced" },
      { name: "SQL", icon: <FaDatabase />, level: "Advanced" },
      { name: "Excel", icon: <FaFileExcel />, level: "Advanced" } // 👈 Updated icon
    ]
  },
  {
    category: "Business Intelligence",
    skills: [
      //{ name: "Tableau", icon: <SiTableau />, level: "Intermediate" },
      //{ name: "Power BI", icon: <SiPowerBI />, level: "Intermediate" }
    ]
  }
];