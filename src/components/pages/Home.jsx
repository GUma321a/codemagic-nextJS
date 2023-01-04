import React from 'react';
import SectionAbout from '../organisms/Home/SectionAbout';
import SectionHero from '../organisms/Home/SectionHero';
import SectionHistory from '../organisms/Home/SectionHistory';
import SectionMyWork from '../organisms/Home/SectionMyWorks';
import SectionSkills from '../organisms/Home/SectionSkills';

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
