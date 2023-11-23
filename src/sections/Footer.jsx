export const Footer = ({logoUrl}) => {
  return (
    <footer className='w-full absolute z-10 py-32 flex justify-between px-52'>
      <div className='flex justify-center items-center gap-14'>
        <div className=''>
          <img src={logoUrl} alt="cuevana logo"/>
        </div>
      </div>
    </footer>
  )
}