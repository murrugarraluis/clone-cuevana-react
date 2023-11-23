import {MovieCard} from "./MovieCard.jsx";

export const MovieList = ({movies}) => {
  return (
    <div className='w-full max-w-3xl p-2 flex gap-2 flex-wrap'>
      {
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.TMDbId}
              title={movie.titles.name}
              year={movie.releaseDate.slice(0, 4)}
              posterUrl={movie.images.poster}
            />
          )
        })
      }
    </div>
  )
}