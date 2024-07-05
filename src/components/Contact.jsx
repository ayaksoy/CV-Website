import React from 'react';
import '../assets/css/Contact.css';

function Contact({ email, phone }) {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default Contact;
