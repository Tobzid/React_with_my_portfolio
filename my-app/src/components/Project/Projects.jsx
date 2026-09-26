import "./ProjectMode.css"
import { ability } from "../dataFolder/portfolioData";

function Projects(){

    return(
        <section className="servicesSectionPortfolio" id="projects">
      <div className="servicesHeade">
        <span className="servicesTag">EXPERT CAPABILITIES</span>
        <h2 className="serviceTitle">Services & Solutions</h2>
        <p className="servicesSubtitle">
          Bridging organizational strategy, modern technology, and data analytics to build high-impact outcomes.
        </p>
      </div>

      <div className="servicesGrid">
        {ability.map((item) => (
          <div className="serviceCard" key={item.id}>
            {/* Image Wrapper */}
            <div className="cardImageWrapper">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="serviceCardImg" 
                />
              )}
              {/* Icon Overlay Pill */}
              <div className="serviceIconPill">
                {item.icon}
              </div>
            </div>

            {/* Content Details */}
            <h3 className="serviceName">{item.name}</h3>
            <span className="serviceRole">{item.role}</span>
            <p className="serviceContent">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
    )
}
export default Projects;