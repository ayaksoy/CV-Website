import React from 'react';
import '../assets/css/PersonalInfo.css';

function PersonalInfo({ name, title, location }) {
  return (
    <div className="personal-info">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
}

export default PersonalInfo;
