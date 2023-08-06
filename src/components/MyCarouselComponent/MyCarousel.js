import React, { useState, useEffect } from "react";
import "./MyCarousel.css";
import { movies } from "../../data/movies";
import Movie from "../MovieComponent/Movie";

export default function MyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moviesPerPage, setMoviesPerPage] = useState(6);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      // Adjust moviesPerPage based on the screen width
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setMoviesPerPage(1);
      } else if (screenWidth <= 900) {
        setMoviesPerPage(2);
      } else if (screenWidth <= 1200) {
        console.log("HERE")
        setMoviesPerPage(3); // Default number of movies per page for screen size <= 1200px
      } else {
        setMoviesPerPage(3); // Set moviesPerPage to 3 for screen size > 1200px
      }
    };
  
    // Call handleResize initially and add an event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);
  
    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{
          transform: `translateX(-${
            (currentIndex % moviesPerPage) * (100 / moviesPerPage)
          }%)`,
        }}
      >
        {movies.map((movie, index) => (
          <div key={index} className="movie-container">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
