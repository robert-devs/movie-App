import React from "react";

const MovieCardDetail = ({ movie }) => {
  return (
    <div className="card-detail">
      <div className="card-image">
        <img src={movie.poster_path} alt={movie.title} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {/* Add any other details you want to display */}
    </div>
  );
};

export default MovieCardDetail;
