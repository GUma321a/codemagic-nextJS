import React, { useState } from 'react';
import axios from 'axios';

const TELEGRAM_API_URL =
  'https://api.telegram.org/bot5572452932:AAEqjC4_b6ZKHRJyBeTCK0iQxVowJ_qiUVA/sendMessage';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', message);

    try {
      await axios.post(TELEGRAM_API_URL, formData);
      alert('Message sent!');
    } catch (error) {
      console.error(error);
      alert('Message failed to send.');
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
