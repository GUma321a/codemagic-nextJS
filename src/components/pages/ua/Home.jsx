import React from 'react';
import SectionAbout from '../../organisms/ua/Home/SectionAbout';
import SectionHero from '../../organisms/ua/Home/SectionHero';
import SectionHistory from '../../organisms/ua/Home/SectionHistory';
import SectionMyWork from '../../organisms/ua/Home/SectionMyWorks';
import SectionSkills from '../../organisms/ua/Home/SectionSkills';

function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionSkills />
      <SectionHistory />
      <SectionMyWork />
    </>
  );
}

export default Home;
