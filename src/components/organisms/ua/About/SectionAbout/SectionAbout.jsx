import React from 'react';

import about_1 from '../../../../../assets/images/illustrations/about-1.jpg';
import about_2 from '../../../../../assets/images/illustrations/about-2.jpg';
import about_3 from '../../../../../assets/images/illustrations/about-3.jpg';

function About() {
  return (
    <section className="about mb-60 mt-[100px] lg:my-160">
      <div className="container">
        <div className="about__wrapper lg:flex lg:justify-between mb-80">
          <h2 className="about__title heading-h3 mb-xl lg:mb-0">Про мене</h2>
          <div className="about__inner flex-60">
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              Привіт мене звати Олександр. Я Front-End Developer.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              Я створюю успішні веб-сайти, які є швидкими та легкими використання та розроблено з
              урахуванням найкращих практик. Я працюю, щоб створити кращий Інтернет. Швидкий,
              простий у використанні, красивий, доступний для всіх і без розчарувань. Незалежно від
              вашого конкретного бізнесу вимоги, у вирішенні цих проблем у вас є великі шанси
              досягнення успіху в Інтернеті.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              Я використовую HTML, CSS і JavaScript для створення адаптивних веб-сайтів які надають
              користувачам найкращий і найбільш прийнятний досвід на свій пристрій і браузер. Я пишу
              код на основі стандартів семантичний, доступний, зручний для пошукової системи,
              простий у обслуговуванні, крос-браузерна сумісність і продуктивність.
            </p>
            <p className="about__text body-text-m text-gray-400 mb-md md:mb-lg">
              Я досвідчений програміст, який може знаходити креативні рішення для технічних проблем,
              водночас розробляючи елегантні та візуально привабливі веб-сайти. Я добре знаю визнані
              технічні стандарти та знайомий із сучасними методами будівництва.
            </p>
          </div>
        </div>
        <div className="about__images grid grid-cols-1 gap-sm md:grid-cols-2 lg:grid-cols-3">
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_1.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px]">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_2.src}
              alt="photo"
              loading="lazy"
            />
          </div>
          <div className="about__image max-h-[500px] md:col-span-2 lg:col-auto">
            <img
              className="max-h-[160px] w-full 450:max-h-[200px] md:max-h-[500px]"
              src={about_3.src}
              alt="photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
