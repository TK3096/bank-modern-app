import React, { useState } from 'react'
import Image from 'next/image'

import { navLinks } from '@utils/constants'

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src='/assets/logo.svg' alt='hoobank' width={124} height={32} />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={toggle ? '/assets/close.svg' : '/assets/menu.svg'}
          alt='menu'
          width={28}
          height={28}
          objectFit='contain'
          onClick={handleToggle}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-popins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
