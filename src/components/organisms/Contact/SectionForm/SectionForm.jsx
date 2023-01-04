import React from 'react';

function SectionForm() {
  return (
    <section className="contact mt-[100px] mb-60 md:mt-[200px] lg:mb-160">
      <div className="container">
        <div className="caption-wrapper max-w-[624px] mx-auto">
          <p className="contact__caption caption-s">Contact Me</p>
          <h2 className="contact__title heading-h2 mb-md">
            Let's build something together... Get in touch with me.
          </h2>
          {/* <p className="contact__text text-gray-200 mb-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla natus deserunt earum nemo incidunt ducimus praesentium autem magni laborum unde doloremque quas sit, temporibus libero nobis et blanditiis. Ipsam.
          </p> */}
          <form
            className="contact-form__form telegram-form"
            method="POST"
            names="Name Email Message"
            formTitle="Contact Form"
          >
            <div className="contact__form-inner mb-lg">
              <p className="contact__form-title text-gray-200 mb-[12px]">Name</p>
              <input
                className="w-full border-solid border-b border-gray-500 p-[10px] hover:border-primary-light focus:border-primary-light"
                type="text"
                name="Name"
                placeholder="John"
                required
              />
            </div>
            <div className="contact__form-inner mb-lg">
              <p className="contact__form-title text-gray-200 mb-[12px]">E-mail</p>
              <input
                className="w-full border-solid border-b border-gray-500 p-[10px] hover:border-primary-light focus:border-primary-light"
                type="email"
                name="Email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="contact__form-message">
              <p className="contact__form-title text-gray-200 mb-[12px]">Message</p>
              <textarea
                className="w-full border-solid border-b border-gray-500 p-[10px] resize-none hover:border-primary-light focus:border-primary-light h-auto"
                name="Message"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className=" contact-form__button inline-block mt-xl button-cta-m form-status"
            >
              <span className="send-text">Start a Project</span>
              <span className="success-text">Message Sent!</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionForm;
