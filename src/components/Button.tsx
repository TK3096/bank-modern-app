import React from 'react'

interface ButtonProps {
  styles?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  const { styles } = props

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Statred
    </button>
  )
}

export default Button
