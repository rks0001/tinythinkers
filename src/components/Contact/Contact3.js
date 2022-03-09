import React from "react";
import "./contact.css";

function Contact3() {
  return (
    <div className="maincontact">
      <h1 className="contacttxt"> Contact Us</h1>
      <div className="contact">
      
      <div className="rightSide">
        

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default Contact3;
