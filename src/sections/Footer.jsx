export const Footer = ({logoUrl}) => {
  return (
    <footer className='w-full py-32 px-12 flex justify-between '>
      <div className='flex justify-center items-center gap-14'>
        <div className=''>
          <img src={logoUrl} alt="cuevana logo" className='min-w-fit'/>
        </div>
      </div>
    </footer>
  )
}