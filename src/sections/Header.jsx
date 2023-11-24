export const Header = ({logoUrl}) => {
  const menuItems = ['Inicio', 'Películas', 'Géneros', 'Series']
  const listItemsMenu = () => {
    return (
      <ul className='hidden lg:flex text-white justify-center items-center gap-6'>
        {
          menuItems.map((item) =>
            (
              <li key={item} className='cursor-pointer hover:text-blue-700'>{item}</li>
            )
          )
        }
      </ul>
    )
  }
  return (
    <header className='w-full absolute z-10 py-6 px-12'>
      <div className=' w-full flex justify-center'>
        <div className='w-full flex justify-between max-w-6xl'>
          <div className='flex justify-center items-center gap-14'>
            <div className=''>
              <img src={logoUrl} alt="cuevana logo" className='min-w-min'/>
            </div>
            {listItemsMenu()}
          </div>
          <div className='hidden md:flex justify-center items-center w-60'>
            <input className='bg-gray-800 px-4 py-2 rounded-3xl text-gray-500 w-full' type="search"
                   placeholder='Buscador...'/>
          </div>
        </div>
      </div>
    </header>
  )
}