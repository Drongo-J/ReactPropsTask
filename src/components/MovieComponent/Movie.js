import React from "react";
import "./Movie.css";
import Details from "../DetailsComponent/Details";

export default function Movie({ movie }) {
  return (
    <div className="movie-card">
      <div>
        <img src={movie.imgurl} alt={movie.name}></img>
      </div>
      <div>
        <h1 className="movie-name">{movie.name}</h1>
        <h2 className="sub-text">By {movie.director}</h2>
        <h2 className="sub-text">{movie.genre} Movie</h2>
        <Details imdb={movie.imdb} finance={movie.finance}></Details>
      </div>
    </div>
  );
}
