import React from "react";
import ContactFormWrapper from "../ContactForm/ContactForm"; // Importing ContactFormWrapper
import "./ContactMe.css";

function ContactMe() {
   return (
      <div className="contact-container">
         <h2>Contact Me!</h2>
         <ContactFormWrapper /> {/*Using all my project 3 logic and code for these components*/}
      </div>
   );
}

export default ContactMe;
