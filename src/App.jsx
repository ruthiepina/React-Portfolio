import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactMe from "./components/ContactMe/ContactMe";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Resume from "./components/Resume/Resume.jsx";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <Router>
         <div className="App">
            <Header />
            <main>
               <Routes>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="/contact" element={<ContactMe />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
               </Routes>
            </main>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
