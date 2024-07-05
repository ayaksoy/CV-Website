import React from 'react';
import '../assets/css/Education.css';

function Education({ education }) {
  return (
    <div className="education">
      <h3>Education</h3>
      {education.map((school, index) => (
        <div key={index}>
          <h4>{school.degree} - {school.institution}</h4>
          <p>{school.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
