import "./Skill.css";
import React from "react";
import { skillsData } from "../dataFolder/portfolioData";

function Skills(){

    return(


<section className="skillsSection" id="skills">
      <div className="skillsDiv">
<div className="skillsHeader">
        <span className="skillsTag">TECHNICAL STACK</span>
        <h2 className="skillsTitle">Skills & Expertise</h2>
        <p className="skillsSubtitle">
          Tools, languages, and platforms I leverage to analyze data and build web applications.
        </p>
      </div>

      <div className="skillsContainer">
        {skillsData.map((group, index) => (
          <div className="skillsCategoryCard" key={index}>
            <h3 className="categoryTitle">{group.category}</h3>
            <div className="skillsGrid">
              {group.skills.map((skill, sIdx) => (
                <div className="skillBadge" key={sIdx}>
                  <div className="skillIcon">{skill.icon}</div>
                  <div className="skillInfo">
                    <span className="skillName">{skill.name}</span>
                    <span className="skillLevel">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>

    )
}
export default Skills;