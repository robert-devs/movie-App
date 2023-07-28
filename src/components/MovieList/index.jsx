import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";
import ImageContainer from "../../atoms/Image-container/container";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// const baseUrl = "https://api.themoviedb.org";
// const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzVlMjU3OGE3NzQ0NDc3NTBlM2VjZDczOWRmM2EzZSIsInN1YiI6IjY0YjkxNDA3YWI2ODQ5MDBmZjQ5YjQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bw43qvtMxRW7VMlFXJ863NXtNhTVhNYeFU0ZLWzsG0k";

const baseUrl = process.env.REACT_APP_BASE_URL;

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const getMoviesData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/3/movie/popular`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const result = await response.json();
        setMovies(result.results);
        console.log(result);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    color: "white",
    slidesToShow: 3,
    slidesToScroll: 4,
    appendDots: (dots) => (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Filter Buttons */}
        {["All", "Action", "Comedy", "Drama"].map((filter) => (
          <button
            className="button"
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            style={{
              marginRight: "10px",
              background: selectedFilter === filter ? "blue" : "gray",
              color: "white",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    ),
  };

  // Filter the movies based on the selected filter
  const filteredMovies =
    selectedFilter === "All"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(selectedFilter.toLowerCase()));

  return (
    <div className="container">
      <Slider {...sliderSettings} className="moviesDisplay" styles={{ color: "white" }}>
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <ImageContainer movie={movie} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
