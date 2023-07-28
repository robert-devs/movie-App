import "./style.css";
import React from "react";

const imageBaseUrl =  "https://image.tmdb.org/t/p/w500"
const ImageContainer = ({ movie }) => {
    return (
        <div key={movie.id} className="images">
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default ImageContainer;
