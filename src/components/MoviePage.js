import { useState, useEffect } from "react";
const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovie = async () => {
    try {
      const url = "https://api.npoint.io/a63acb4563f9499357fa";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.error("Issue in fetching data");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div>Hey! You are at the right place</div>
      <button onClick={fetchMovie}>Show movie details</button>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div key={index}>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <img src={movie.poster_path} alt="" />
          </div>
        ))
      ) : (
        <p> loading</p>
      )}
    </>
  );
};

export default MoviePage;
