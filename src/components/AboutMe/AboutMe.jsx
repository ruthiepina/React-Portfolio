import React from "react";
import "./AboutMe.css";
import aboutMeData from "../../data/aboutme.json";

function AboutMe() {
   return (
      <div className="about-container">
         <div className="left-side">
            <h1>{aboutMeData.intro}</h1>
            <img src="" alt="Ruthie" className="" />
         </div>
         <div className="right-side">
            {aboutMeData.paragraphs.map((paragraph, index) => (
               <p key={index}>{paragraph}</p>
            ))}
         </div>
      </div>
   );
}

export default AboutMe;
