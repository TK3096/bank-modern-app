/* eslint-disable @next/next/no-img-element */
import React from 'react'

import styles from '@utils/constants/styles'

interface FeatureCardProps {
  isLast: boolean
  icon: string
  title: string
  content: string
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  const { isLast, icon, title, content } = props

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        isLast ? 'mb-0' : 'mb-6'
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue`}
      >
        <img src={icon} alt={icon} className='w-[50%] h-[50%] object-contain' />
      </div>

      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
