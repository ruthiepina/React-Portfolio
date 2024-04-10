// import React from "react";
// import "./Portfolio.css";
// import PortfolioDisplay from "../PortfolioDisplay/PortfolioDisplay";

// const Portfolio = () => {
//    return (
//       <div className="portfolio-page-container">

//          <PortfolioDisplay />
//       </div>
//    );
// };

// export default Portfolio;

import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
   const portfolioItems = [
      {
         id: 1,
         title: "Coding Quiz",
         description: "Click to see the repo.",
         imageUrl: "../../../public/images/codingquiz.png",
         githubUrl: "https://github.com/ruthiepina/Coding-Quiz",
      },
      {
         id: 2,
         title: "Tech Blog",
         description: "Click to see the repo",
         imageUrl: "../../../public/images/techblog.png",
         githubUrl: "https://github.com/ruthiepina/MVC-Tech-Blog",
      },
      {
         id: 3,
         title: "Weather Dashboard",
         description: "Click to see the repo",
         imageUrl: "../../../public/images/weatherdash.png",
         githubUrl: "https://github.com/ruthiepina/Weather-Dashboard",
      },
      {
         id: 4,
         title: "Employee Tracker",
         description: "Click to see the repo",
         imageUrl: "../../../public/images/tracker.png",
         githubUrl: "https://github.com/ruthiepina/Employee-Tracker",
      },
      {
         id: 5,
         title: "SVG Logo Generator",
         description: "Click to see the repo",
         imageUrl: "../../../public/images/svg.png",
         githubUrl: "https://github.com/ruthiepina/SVG-Logo-Generator",
      },
      {
         id: 6,
         title: "E-Commerce Backend",
         description: "Click to see the repo",
         imageUrl: "../../../public/images/ecomm.png",
         githubUrl: "https://github.com/ruthiepina/E-Commerce-Back-End",
      },
   ];

   return (
      <div className="portfolio">
         <h1>Portfolio</h1>
         <div className="portfolio-cards">
            {portfolioItems.map((item) => (
               <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" key={item.id}>
                  <div className="portfolio-card">
                     <h3>{item.title}</h3>
                     <img src={item.imageUrl} alt={`Item ${item.id}`} />
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
};

export default Portfolio;
