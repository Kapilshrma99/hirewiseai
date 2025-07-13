import React from 'react'
import Logo from '../assets/Logo.png'
import Logo1 from '../assets/Logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'

const Partner = () => {
  return (
    <div className='w-3/4 mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between py-12  space-y-6 lg:space-y-0 lg:space-x-8'>
      <img src={Logo} alt="" className='slide-right '/>
      <img src={Logo1} alt="" className='slide-right delay-100'/>
      <img src={Logo2} alt="" className='slide-right delay-200'/>
      <img src={Logo3} alt="" className='slide-right delay-300'/>
    </div>
  )
}

export default Partner
