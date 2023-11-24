import {MovieItem} from "./MovieItem.jsx";

export const MovieList = ({movies}) => {
  return (
    <div className='w-full flex flex-col gap-6'>
      {
        movies.map((movie) => {
            return (
              <MovieItem
                key={movie.TMDbId}
                name={movie.titles.name}
                urlImagen={movie.images.poster}
              />
            )
          }
        )
      }
    </div>
  )
}