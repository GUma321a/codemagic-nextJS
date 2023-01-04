import React from 'react';

function SectionHistory() {
  return (
    <section className="history bg-third-dark py-2xl md:py-[128px] my-60 lg:my-160">
      <div className="container">
        <div className="history__wrapper md:flex justify-between">
          <div className="history__info mb-md md:mb-lg flex-30">
            <h2 className="history__title heading-h2 mb-sm">My courses</h2>
          </div>
          <div className="history__timeline flex flex-wrap flex-60">
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2020</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Passing the course 'HTML & CSS' on stepik
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2021</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Completion of the course "from 0 to 1" by Vadym Prokopchuk
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2022</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Completion of course "JavaScript + React" from Ivan Petrechenko
              </h4>
            </div>
            <div className="history__timeline-item flex-50 p-[10px]">
              <h3 className="history__timeline-year heading-h3 text-primary-dark">2022</h3>
              <h4 className="history__timeline-text heading-h4 text-secondary-dark">
                Completion of course "React Pizza" from Dennis Archakov
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHistory;
