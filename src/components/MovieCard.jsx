export const MovieCard = ({title, year, posterUrl}) => {
  return (
    <div className='w-44 text-white cursor-pointer hover:text-blue-700'>
      <div className='relative'>
        <img
          className='rounded-lg'
          src={posterUrl}
          alt={'poster ' + title}/>
        <span
          className='absolute bottom-2 right-2
          bg-blue-600 rounded-xl
          px-3 py-1
          text-xs font-bold
          text-white
          '
        >{year}</span>
      </div>
      <h2 className='text-sm text-center py-1'>{title}</h2>
    </div>
  )
}