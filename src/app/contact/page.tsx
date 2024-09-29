'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        ...formData,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the input fields
    } else {
      setResponseMessage(data.error || 'Failed to send message.');
    }
  };

  return (
    <div className="relative py-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-blue-300 opacity-30 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bg-purple-400 opacity-20 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Message"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
          {responseMessage && (
            <p className={`text-center ${responseMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
