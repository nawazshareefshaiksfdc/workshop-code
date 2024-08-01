import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question, feedback, or just want to get in touch, we're here to help.</p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +1-234-567-890</p>
        <p><strong>Address:</strong> 1234 Example St, Suite 100, City, Country</p>
        <p>Our customer service team is available Monday to Friday, from 9 AM to 5 PM. We will do our best to respond to your inquiry as quickly as possible.</p>
      </div>
    </div>
  );
};

export default ContactUs;
