import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'

const links = [
  {
    id: 1,
    title: 'Inicio',
    link: '#'
  },
  {
    id: 2,
    title: 'Nosotros',
    link: '#'
  },
  {
    id: 3,
    title: 'Contacto',
    link: '#'
  },
  {
    id: 4,
    title: 'Soporte',
    link: '#'
  }
]

const navbarRedes = [
  {
    id: 1,
    title: 'Instagram',
    link: 'https://www.instagram.com',
    icon: 'bi bi-instagram'
  },
  {
    id: 2,
    title: 'Tiktok',
    link: 'https://www.tiktok.com',
    icon: 'bi bi-tiktok'
  }
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <nav className='fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md z-50'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[100px]" />
        </div>

        { /* Boton de hamburguesa */ }

        <button onClick={toogleMenu} className='md:hidden text-white'>
          <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
            { isOpen ? (
              <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'/>
            ) : (
              <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'/>
            ) }
          </svg>
        </button>

        { /* Navegación desktop */ }

        <div className="hidden md:block">
          <ul className='flex sm:space-x-8 space-x-4'>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.link}
                className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110
                transform inline-block duration-100'>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className='flex space-x-4'>
            {navbarRedes.map((red) => (
              <li key={red.id}>
                <a href={red.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block transition-transform duration-300 transform hover:scale-125'>
                  <i className={`${red.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all
                  duration-300`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      { /* Navegación mobile */ }
      <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-col px-4 py-2'>
          {links.map((link) => (
            <li key={link.id} className='py-2 text-center'>
              <a href={link.link} onClick={()=>setIsOpen(false)}
              className='text-white hover:text-sky-200'>{link.title}</a>
            </li>
          ))}
        </ul>
        <ul className='flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
          {navbarRedes.map((red) => (
            <li key={red.id}>
              <a href={red.link}
                onClick={()=>setIsOpen(false)}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block'>
                <i className={`${red.icon} text-lg text-white hover:text-sky-200`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar