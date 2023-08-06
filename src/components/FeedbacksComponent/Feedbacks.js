import React, { useEffect, useState } from 'react';
import './Feedbacks.css';
import { feedbacks } from '../../data/feedbacks';

const Feedbacks = () => {
 
  return (
    <div className="feedbacks-ticker">
      <div className="feedbacks-content">
        {feedbacks.map((item, index) => (
          <div key={index}>
            <h1 className={`feedback-item`}>{item}</h1>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;   
