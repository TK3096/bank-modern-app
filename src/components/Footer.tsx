import React from 'react'
import Image from 'next/image'

import styles from '@utils/constants/styles'
import { footerLinks, socialMedia } from '@utils/constants'

const Footer: React.FC = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <Image
            src='/assets/logo.svg'
            alt='logo'
            width={266}
            height={72}
            layout='fixed'
            objectFit='contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className='flex flex-col ss:my-0 my-4 min-w-[150px]'
            >
              <h4 className='font-poppin font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <div
              key={social.id}
              className={`cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
              onClick={() => window.open(social.link)}
            >
              <Image
                src={social.icon}
                alt={social.id}
                layout='fixed'
                width={21}
                height={21}
                objectFit='contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer