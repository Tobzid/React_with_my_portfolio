import React from "react";
import { ability } from "../dataFolder/portfolioData";
import "./services.css";


function Services(){
    return(
        <div>
<section className="servicesSection"  id="about">

<div className="servicesSectionDiv" >

      <div className="servicesHeader">
        <h2>Features</h2>
        <p>What I bring to the table</p>
      </div>

      <div className="servicesGrid">
        {ability.map((item) => (

          <div className="serviceCard" key={item.id}>

            

            <div className="serviceIcon">{item.icon}</div>
            <h3 className="serviceName">{item.name}</h3>
            <p className="serviceRole">{item.role}</p>
            <p className="serviceContent">{item.content}</p>
          </div>
        ))}
      </div>
</div>


    </section>
        </div>
    )
}
export default Services;