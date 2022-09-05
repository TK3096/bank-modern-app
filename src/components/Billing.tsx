/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import styles, { layout } from '@utils/constants/styles'

const Billing: React.FC = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src='/assets/bill.png'
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className='sm:block hidden' /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <Image
            src='/assets/apple.svg'
            alt='apple-store'
            width={128}
            height={42}
            objectFit='contain'
            className='cursor-pointer'
          />
          <div className='mr-5'></div>
          <Image
            src='/assets/google.svg'
            alt='google-store'
            width={128}
            height={42}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}

export default Billing
