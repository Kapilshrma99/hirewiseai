import React from 'react'

const Aboutus = () => {
  return (
    <div className='w-3/4 mx-auto  py-12  space-y-6 lg:space-y-0 lg:space-x-8'>
      <div>
        <p className='text-2xl'>About Us</p>
        <h1 className='font-bold text-3xl py-5'>Empowering Innovation AI</h1>
        <p className='text-xl'>we are driven by the vision of transforming businesses with artificial intelligence. Founded in 2024, we have consistently pushed the boundaries of AI to offer smart, scalable, and intuitive solutions that drive growth and efficiency. <br></br><br></br>
Our team of expert data scientists, engineers, and strategists combines cutting-edge technology with deep industry knowledge to deliver custom AI solutions that cater to unique business challenges. </p>
      </div>
      <div className='py-14 flex items-center justify-between flex-col lg:flex-row justify-between'>
        <div className=''>
            <h1 className='font-bold text-3xl py-5'>32+</h1>
            <p className='text-xl'>Years in AI <br></br>Innovation</p>
        </div>
        <div><h1 className='font-bold text-3xl py-5'>20</h1>
            <p className='text-xl'>Client Countries <br></br>WorldWide</p></div>
        <div><h1 className='font-bold text-3xl py-5'>4000+</h1>
            <p className='text-xl'>Projects Successfully  <br></br>Implemented</p></div>

      </div>
    </div>
  )
}

export default Aboutus
