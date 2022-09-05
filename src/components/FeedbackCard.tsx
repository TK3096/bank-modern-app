import React from 'react'
import Image from 'next/image'

interface FeedbackCardProps {
  content: string
  name: string
  title: string
  img: string
}

const FeedbackCard: React.FC<FeedbackCardProps> = (props) => {
  const { content, name, title, img } = props

  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <Image
        src='/assets/quotes.svg'
        alt='dobule-quotes'
        width={42}
        height={27}
        layout='fixed'
        objectFit='contain'
      />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
      </p>

      <div className='flex flex-row'>
        <Image
          src={img}
          alt={title}
          width={48}
          height={48}
          layout='fixed'
          className='rounded-full'
        />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
