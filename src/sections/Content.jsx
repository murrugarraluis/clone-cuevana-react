import {MovieList} from "../components/MovieList.jsx";

export const Content = ({movies}) => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-1 px-52">
      <div className='w-full h-full col-span-3'>
        <MovieList movies={movies}/>
      </div>
      <div className='w-full h-full'>
      </div>
    </div>
  )
}