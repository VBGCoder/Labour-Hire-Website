// ContractorPage.js

import React, { useState } from 'react';
import '../StyleComponents/ConttractorPage.css'

const ContractorPage = () => {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your API for processing
    // Example: axios.post('/api/apply', formData);
    setApplications([...applications, formData]);
    setFormData({ name: '', email: '', skills: '' });
  };

  return (
    <div className="contractor-page">
      <header>
        <h1>Professional Contractor Page</h1>
        <p>Hire Skilled Laborers</p>
      </header>
      <section className="job-listings">
        {/* Display job listings here */}
        {/* Example: */}
        <div className="job">
          <h2>Construction Worker</h2>
          <p>Location: City XYZ</p>
          <p>Requirements: Experience in carpentry, lifting heavy objects</p>
        </div>
        {/* Add more job listings */}
      </section>
      <section className="application-form">
        <h2>Apply for a Job</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="skills"
            placeholder="Your Skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
          <button type="submit">Submit Application</button>
        </form>
      </section>
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@contractorcompany.com</p>
      </section>
    </div>
  );
};

export default ContractorPage;
