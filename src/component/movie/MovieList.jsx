import "./style.css";
import FilterButtons from "../buttons";
import ImageContainer from "../images/ImageContainer";
import MovieCardDetail from "../cardDetail/CardDetail";
import PaginationButtons from "../pagination";
import React, { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);

  const itemsPerPage = 6; // Set the number of items to show per page

  useEffect(() => {
    const getMoviesData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/3/movie/popular`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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

  // Filter the movies based on the selected filter
  const filteredMovies =
    selectedFilter === "All"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(selectedFilter.toLowerCase()));

  // Calculate total pages based on the number of movies and items per page
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  // Slice the movies array based on the current page and items per page
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

 return (
    <div className="container">
      <div className="page">
        <div className="moviesDisplay">
          {paginatedMovies.map((movie) => (
            
            <div className="card" >
              <div className="card-image">
                <ImageContainer movie={movie} />
              </div>
              <h2>{movie.title}</h2>
              <h2>{movie.release_date}</h2>
            </div>
          ))}
        </div>
        <div className="filters">
          <FilterButtons
            filters={["All", "Action", "Comedy", "Drama","Arabic"]}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            setCurrentPage={setCurrentPage}
          />
          <PaginationButtons
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {selectedMovie && <MovieCardDetail movie={selectedMovie} />}
    </div>
  );
};


export default MovieList;
