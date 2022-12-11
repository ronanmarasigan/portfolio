import React from 'react'




const Button = ({styles}) => {
  

  return (
    <button type='button' className={` py-2 px-4 rounded-xl bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}  transition ease-in-out delay-150  hover:scale-110 duration-300 `}
    >
    <a href='/#about'>Who Am I?</a>        
    </button>
  )
}

export default Button