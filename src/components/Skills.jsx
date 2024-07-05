import React from 'react';
import '../assets/css/Skills.css';

function Skills({ skills }) {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
