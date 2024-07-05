import React from 'react';
import "../assets/css/Certifications.css";

function Certifications({ certifications }) {
  return (
    <div className="certifications">
      <h3>Certifications</h3>
      {certifications.map((cert, index) => (
        <div key={index}>
          <h4>{cert.name}</h4>
          <p>{cert.institution}</p>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
