import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import "./App.css";

function App() {
   return (
      <Router>
         <div className="App">
            <MainHeader />
            <main>
               <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<ContactMe />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
