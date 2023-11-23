import {Hero} from "./components/Hero.jsx";
import {Header} from "./components/Header.jsx";
import {MovieList} from "./components/MovieList.jsx";
import {useEffect, useState} from "react";
import MovieData from "./data/movie.json";
import MoviesData from "./data/movies.json";

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const data = MovieData.movie;
    setMovies(MoviesData.movies)
    setMovie({
      title: data.titles.name,
      overview: data.overview,
      imageUrl: data.images.backdrop
    })
  }, []);
  return (
    <>
      <Header/>
      <Hero
        {...movie}
      />
      <div id='body' className='px-40'>
        <MovieList movies={movies}/>
      </div>
    </>
  )
}

export default App
