import {Hero} from "./sections/Hero.jsx";
import {Header} from "./sections/Header.jsx";
import {useEffect, useState} from "react";
import MovieData from "./data/movie.json";
import MoviesData from "./data/movies.json";
import {Content} from "./sections/Content.jsx";
import {Footer} from "./sections/Footer.jsx";

const CUEVANA_LOGO_URL = 'https://ww3.cuevana8.com/_next/image?url=/_next/static/media/cuevana8.24457267.png&w=640&q=75'

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
      <Header logoUrl={CUEVANA_LOGO_URL}/>
      <Hero{...movie}/>
      <Content movies={movies}/>
      <Footer logoUrl={CUEVANA_LOGO_URL}/>
    </>
  )
}

export default App
