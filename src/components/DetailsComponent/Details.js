import React from 'react';
import './Details.css'

const MAX_STARS = 5;

export default function Details({ imdb, finance }) {
  const roundedRating = Math.round((imdb / 10) * MAX_STARS);
  const filledStars = '★'.repeat(roundedRating);
  const emptyStars = '☆'.repeat(MAX_STARS - roundedRating);

  return (
    <div className='details-container'>
      <span className='filled-stars'>{filledStars}</span>
      <span className='empty-stars'>{emptyStars}</span>
      <br />
      {finance}
    </div>
  );
}
