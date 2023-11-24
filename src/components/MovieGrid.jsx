import {MovieCard} from "./MovieCard.jsx";

export const MovieGrid = ({movies}) => {
  return (
    <div className='w-full max-w-3xl flex gap-2 flex-wrap justify-center lg:justify-start'>
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