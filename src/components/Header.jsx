export const Header = () => {
  const CUEVANA_LOGO_URL = 'https://ww3.cuevana8.com/_next/image?url=/_next/static/media/cuevana8.24457267.png&w=640&q=75'
  const menuItems = ['Inicio', 'Películas', 'Géneros', 'Series']
  const listItemsMenu = () => {
    return (
      <ul className='flex text-white justify-center items-center gap-6'>
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
    <header className='w-full absolute z-10 py-6 flex justify-between px-40'>
      <div className='flex justify-center items-center gap-14'>
        <div className=''>
          <img src={CUEVANA_LOGO_URL} alt="cuevana logo"/>
        </div>
        {listItemsMenu()}
      </div>
      <div className='flex justify-center items-center w-60'>
        <input className='bg-gray-800 px-4 py-2 rounded-3xl text-gray-500 w-full' type="search"
               placeholder='Buscador...'/>
      </div>
    </header>
  )
}