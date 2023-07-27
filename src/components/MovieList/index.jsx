import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
import ImageContainer from "../../atoms/Image-container/container";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getMovies } from "../../utils/utilities";

// const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const moviesData = await getMovies();
            setMovies(moviesData.results);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        color:"white",
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="container"  >
            <Slider {...sliderSettings} className="moviesDisplay" styles={{color:"white"}}>
                {movies &&
                    movies.map((movie) => (
                        <div key={movie.id}>
                            <ImageContainer movie={movie} />
                            <h2 >{movie.title}</h2>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};


export default MovieList;
