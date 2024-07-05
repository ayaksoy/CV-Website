import React from 'react';
import '../assets/css/Experience.css';

function Experience({ experience }) {
  return (
    <div className="experience">
      <h3>Experience</h3>
      {experience.map((job, index) => (
        <div key={index}>
          <h4>{job.position} - {job.company}</h4>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
