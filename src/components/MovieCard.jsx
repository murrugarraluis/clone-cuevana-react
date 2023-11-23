export const MovieCard = () => {
  const movie = {
    title: 'De vuelta a Las Vegas',
    date: '2023',
    posterUrl: 'https://ww3.cuevana8.com/_next/image?url=https://image.tmdb.org/t/p/original/krOY3GjlM5qfgB9QwoWkXJAhH5a.jpg&w=384&q=75'
  }
  return (
    <div className='w-44 text-white cursor-pointer hover:text-blue-700'>
      <div className='relative'>
        <img
          className='rounded-lg'
          src={movie.posterUrl}
          alt={'poster ' + movie.title}/>
        <span
          className='absolute bottom-2 right-2
          bg-blue-600 rounded-xl
          px-3 py-1
          text-xs font-bold
          text-white
          '
        >{movie.date}</span>
      </div>
      <h2 className='text-sm text-center py-1'>{movie.title}</h2>
    </div>
  )
}