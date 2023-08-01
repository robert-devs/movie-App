import "./App.css";
import MovieList from "./component/movie/MovieList";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MovieList  />
    </div>
  );
}

export default App;
