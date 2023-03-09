import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'next-i18next';

const TELEGRAM_API_URL =
  'https://api.telegram.org/bot5572452932:AAEqjC4_b6ZKHRJyBeTCK0iQxVowJ_qiUVA/sendMessage';

function Form() {
  const { t } = useTranslation('contact');

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
    <form
      className="contact-form__form telegram-form"
      method="POST"
      // names="Name Email Message"
      // formTitle="Contact Form"
      onSubmit={handleSubmit}
    >
      <div className="contact__form-inner mb-lg">
        <p className="contact__form-title text-gray-200 mb-[12px]">{t('form__name')}</p>
        <input
          className="w-full border-solid border-b border-gray-500 p-[10px] hover:border-primary-light focus:border-primary-light"
          type="text"
          name="Name"
          placeholder="John"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="contact__form-inner mb-lg">
        <p className="contact__form-title text-gray-200 mb-[12px]">{t('form__email')}</p>
        <input
          className="w-full border-solid border-b border-gray-500 p-[10px] hover:border-primary-light focus:border-primary-light"
          type="email"
          name="Email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="contact__form-message">
        <p className="contact__form-title text-gray-200 mb-[12px]">{t('form__message')}</p>
        <textarea
          className="w-full border-solid border-b border-gray-500 p-[10px] resize-none hover:border-primary-light focus:border-primary-light h-auto"
          name="Message"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className=" contact-form__button inline-block mt-xl button-cta-m form-status"
      >
        <span className="send-text">{t('button')}</span>
        <span className="success-text">{t('button__success')}</span>
      </button>
    </form>
  );
}

export default Form;
