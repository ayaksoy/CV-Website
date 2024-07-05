import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './assets/css/App.css';

function App() {
  const personalInfo = {
    name: 'Ahmet Yasir Aksoy',
    title: 'Software Engineer',
    location: 'Istanbul, TR',
  };

  const summary = 'Experienced Software Engineer with a demonstrated history of working in the technology industry.';

  const experience = [
    {
      position: 'Senior Software Engineer',
      company: 'Arnavutkoy Company',
      duration: 'Jan 2023 - Present',
      description: 'Worked on various projects using modern technologies.'
    },
    {
      position: 'Middle Software Engineer',
      company: 'Limboo limited',
      duration: 'Jan 2021 - 2022',
      description: 'Worked as a Java developer.'
    }
  ];

  const education = [
    {
      degree: 'Computer Science',
      institution: 'Ataturk universitesi',
      duration: '2021 - 2023',
    },
  ];

  const skills = ['JavaScript', 'React', 'Java',  'C#','C', "Dotnet", "Entity Framework",'CSS'];

  const projects = [
    {
      name: 'Project A',
      description: 'Developed a full-stack application using React and Node.js.',
    },
    // Diğer projeleri buraya ekleyin.
  ];

  const certifications = [
    {
      name: 'Certified React Developer',
      institution: 'React Institute',
    },
    // Diğer sertifikaları buraya ekleyin.
  ];

  const contact = {
    email: 'lorem@impsum.com',
    phone: '+905555555555',
  };

  return (
    <div className="App">
      <PersonalInfo {...personalInfo} />
      <Summary summary={summary} />
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Certifications certifications={certifications} />
      <Contact {...contact} />
    </div>
  );
}

export default App;
