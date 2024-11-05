'use client';
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'newsletter', email }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Subscribed successfully!');
        setEmail(''); // Clear the input field
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800 rounded-lg shadow-lg p-8 my-20">
      <h2 className="text-2xl font-semibold text-center mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-center mb-6">Get the latest updates and offers right in your inbox. Enter your email below to subscribe.</p>
      <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email address"
        />
        <button 
          type="submit" 
          className={`bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        {message && (
          <p 
            className={`text-center font-semibold ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`} 
            aria-live="polite"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
