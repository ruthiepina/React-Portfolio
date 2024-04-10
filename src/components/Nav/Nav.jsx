import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Ensure the path is correct

function Nav() {
   return (
      <nav className="app-nav">
         <ul>
            <li>
               <Link to="/">About Me</Link>
            </li>
            <li>
               <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
               <Link to="/resume">Resume</Link>
            </li>

            <li>
               <Link to="/contact">Contact Me</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Nav;
