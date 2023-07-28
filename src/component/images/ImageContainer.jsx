import React from "react";

const imageBaseUrl =  process.env.REACT_APP_IMAGE_BASE_URL


const ImageContainer = ({ movie }) => {
    return (
        <div key={movie.id} className="imageContainer">
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default ImageContainer;
