export const Hero = ({title, overview, imageUrl}) => {
  return (
    <div className='w-full relative pt-36 md:pt-44 lg:pt-52 pb-36 md:pb-48'>
      <img src={imageUrl} alt="logo" className='absolute h-full top-0 left-0 w-full opacity-20'/>
      <div className='relative top-0 left-0 w-full px-12 flex justify-center'>
        <div className='flex flex-col gap-5 max-w-6xl'>
          <div className="flex justify-start items-center gap-2">
            <h2 className='text-6xl text-white font-bold'>{title}</h2>
            <span className='mt-6 bg-amber-400 text-black font-bold text-2xs rounded-3xl py-0.5 px-1.5'>Película</span>
          </div>
          <div className="flex gap-2 text-gray-400 text-sm justify-start items-baseline">
            <p className='text-amber-400'><span className='text-lg'>7</span>/10</p>
            <p>1h 45min</p>
            <p>2023</p>
          </div>
          <p className='text-gray-400 text-md lg:text-xl'>{overview}</p>
          <div className="actions w-full h-full">
            <a href="#" className='bg-blue-600 text-white text-sm md:text-md lg:text-xl px-4 py-2 rounded-3xl inline-block'>Ver Película</a>
          </div>
        </div>
      </div>
    </div>
  )
}