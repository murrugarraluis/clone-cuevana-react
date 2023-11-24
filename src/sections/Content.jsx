import {MovieGrid} from "../components/MovieGrid.jsx";
import {MovieList} from "../components/MovieList.jsx";

export const Content = ({movies}) => {
  return (
    <div className='flex justify-center py-20'>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 grid-rows-1 px-12 max-w-6xl xl:px-0">
        <div className='w-full h-full col-span-3'>
          <h2 className='text-white text-3xl my-8 text-center lg:text-start'>Películas Online</h2>
          <MovieGrid movies={movies}/>
        </div>
        <div className='w-full h-full'>
          <h2 className='text-white text-2xl my-8 text-center lg:text-start'>Películas Destacadas</h2>
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  )
}