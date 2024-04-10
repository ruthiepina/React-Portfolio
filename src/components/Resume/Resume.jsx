import React from "react";
import "./Resume.css";

function Resume() {
   return (
      <div className="resume-container">
         <h1>Skills</h1>
         <table className="skills-table">
            <tbody>
               <tr>
                  <td>
                     <h2>Front End</h2>
                     <ul>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                        <li>JQuery</li>
                        <li>React</li>
                     </ul>
                  </td>
                  <td>
                     <h2>Back End</h2>
                     <ul>
                        <li>Node.js & Express.js</li>
                        <li>RESTful API</li>
                        <li>CRUD Operations</li>
                        <li>MySQL</li>
                        <li>MongoDB &Mongoose</li>
                        <li>GraphQL</li>
                        <li>JWT</li>
                     </ul>
                  </td>
               </tr>
            </tbody>
         </table>
         <a href="/resume/" download="" className="download-btn">
            Download My Resume
         </a>
      </div>
   );
}

export default Resume;
