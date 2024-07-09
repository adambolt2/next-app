'use client'
import React, { useState } from 'react';
import Aboutme from '../Aboutme';
import AcademicMe from '../AcademicMe';
import WorkExperience from '../WorkExperience';
import MySkills from '../MySkills';

const HomeNavbar = () => {
    const [showAboutMe, setShowAboutMe] = useState(true);
    const [showAcademics, setShowAcademics] = useState(false);
    const [showWorkExperience, setShowWorkExperience] = useState(false);
    const [showSkills, setSkillExperience] = useState(false);
  
    const handleHomeClick = () => {
      setShowAboutMe(true);
      setShowAcademics(false);
      setShowWorkExperience(false);
      setSkillExperience(false);
    };
  
    const handleAcademicsClick = () => {
      setShowAboutMe(false);
      setShowAcademics(true);
      setShowWorkExperience(false);
      setSkillExperience(false);

    };
  
    const handleWorkExperienceClick = () => {
      setShowAboutMe(false);
      setShowAcademics(false);
      setShowWorkExperience(true);
      setSkillExperience(false);

    };
    const handleSkillsClick = () => {
      setShowAboutMe(false);
      setShowAcademics(false);
      setShowWorkExperience(false);
      setSkillExperience(true);

    };
  
    return (
      <div>
      <header className="mx-auto bg-slate-900 dark:bg-rose-50 dark:text-black text-white p-4 flex flex-row justify-center items-center">
                <div className="flex space-x-4">
            <button onClick={handleHomeClick} className={`focus:outline-none hover:text-blue-500 ${showAboutMe ? 'text-blue-500' : ''}`}>
              About Me & Hobbies
            </button>
            <button
             onClick={handleAcademicsClick} className={`focus:outline-none hover:text-blue-500 ${showAcademics ? 'text-blue-500' : ''}`}>
              Academics
            </button>
            <button onClick={handleWorkExperienceClick} className={`focus:outline-none hover:text-blue-500 ${showWorkExperience ? 'text-blue-500' : ''}`}>
              Work Experience
            </button>
            <button onClick={handleSkillsClick} className={`focus:outline-none hover:text-blue-500 ${showSkills ? 'text-blue-500' : ''}`}>
              Skills
            </button>
          </div>
        </header>
        {showAboutMe && <Aboutme />}
        {showAcademics && <AcademicMe />}
        {showWorkExperience && <WorkExperience/>}
        {showSkills && <MySkills/>}
      </div>
    );
  };
  

export default HomeNavbar;
