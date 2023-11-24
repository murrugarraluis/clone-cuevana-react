import {MovieGrid} from "../components/MovieGrid.jsx";
import {MovieList} from "../components/MovieList.jsx";

export const Content = ({movies}) => {
  return (
    <div className='flex justify-center'>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 grid-rows-1 px-12 max-w-6xl">
        <div className='w-full h-full col-span-3'>
          <MovieGrid movies={movies}/>
        </div>
        <div className='w-full h-full'>
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  )
}