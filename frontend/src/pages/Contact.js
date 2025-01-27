import React, { useState } from 'react';
import { EnvelopeFill, Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, error: false });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        setStatus({ submitted: true, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitted: true, success: false, error: true });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus({ submitted: true, success: false, error: true });
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex justify-center items-center py-12">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-xl w-2/3 ">
        <div className="text-center mb-6">
          <EnvelopeFill size={50} color="#20c997" />
        </div>
        <h1 className="text-3xl font-extrabold mb-6">Get in Touch</h1>
        {status.submitted && status.success && (
          <div className="bg-green-500 text-white p-3 rounded mb-6">
            Your message has been sent successfully!
          </div>
        )}
        {status.submitted && status.error && (
          <div className="bg-red-500 text-white p-3 rounded mb-6">
            There was an error sending your message. Please try again later.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={30} color="#3b5998" className="hover:scale-110 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={30} color="#00acee" className="hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={30} color="#C13584" className="hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
