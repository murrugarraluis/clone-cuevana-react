export const MovieItem = ({name, urlImagen}) => {
  return (
    <div className='w-full flex gap-6'>
      <img className='w-20 rounded-xl' src={urlImagen} alt={name}/>
      <div className='flex flex-col gap-2'>
        <h2 className='text-white text-md'>{name}</h2>
        <div className="flex gap-2 text-gray-400 text-sm justify-start items-baseline">
          <p className='text-amber-400'><span className='text-lg'>7</span>/10</p>
          <p>1h 45min</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  )
}