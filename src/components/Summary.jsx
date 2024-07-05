import React from 'react';
import '../assets/css/Summary.css';

function Summary({ summary }) {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;
