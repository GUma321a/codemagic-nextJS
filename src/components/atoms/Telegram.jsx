import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

function Form(props) {
  const { t } = useTranslation('contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successButton, setSuccessButton] = useState(false);
  const [errorButton, setErrorButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chatId = '-780517028';
    const token = '5572452932:AAEqjC4_b6ZKHRJyBeTCK0iQxVowJ_qiUVA';
    const telegramFormTitle = e.target.getAttribute('action');
    const text = `<b>New request from:</b> ${telegramFormTitle}\n<b>Name:</b> ${name}\n<b>E-mail:</b> ${email}\n<b>Message:</b> ${message}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
      text
    )}`;
    const response = await fetch(url);
    if (response.ok) {
      setSuccessButton(true);
      setTimeout(() => {
        setSuccessButton(false);
      }, 3000);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setErrorButton(true);
      setTimeout(() => {
        setErrorButton(false);
      }, 3000);
    }
  };

  return (
    <form
      className="contact-form__form telegram-form"
      method="POST"
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="contact__form-inner mb-lg">
        <p className="contact__form-title text-gray-200 mb-[12px]">{t('form__name')}</p>
        <input
          className="w-full border-solid border-b border-gray-500 p-[10px] hover:border-primary-light focus:border-primary-light"
          type="text"
          name="Name"
          placeholder={t('placeholder__name')}
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
          placeholder={t('placeholder__email')}
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
          type="message"
          placeholder={t('placeholder__message')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`${
          successButton ? 'success' : ''
        } contact-form__button inline-block mt-xl button-cta-m form-status ${
          errorButton ? 'error' : ''
        }`}
      >
        <span className="send-text">{t('button')}</span>
        <span className="success-text">{t('button__success')}</span>
        <span className="error-text hidden">{t('button__error')}</span>
      </button>
    </form>
  );
}

export default Form;

Form.defaultProps = {
  action: 'Form',
};
