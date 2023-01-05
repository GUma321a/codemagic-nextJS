import React from 'react';

function SectionHistory() {
  return (
    <section className="history bg-third-dark py-2xl md:py-[128px] my-60 lg:my-160">
      <div className="container">
        <div className="history__wrapper md:flex justify-between">
          <div className="history__info mb-md md:mb-lg flex-30">
            <h2 className="history__title heading-h2 mb-sm">Моє навчання</h2>
          </div>
          <div className="history__timeline flex flex-wrap flex-60">
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2020</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Проходження курсу 'HTML & CSS' на застосунку Stepik
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2021</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Пройшов курс "Від 0 до 1" від Вадима Прокопчука
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2022</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Пройшов курс "JavaScript + React" від Івана Петриченка
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2022</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Пройшов курс "React Pizza" від Дениса Архакова
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHistory;
