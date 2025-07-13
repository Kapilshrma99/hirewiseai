import React from 'react'
import icon from "../assets/Icon.png"
import icon1 from "../assets/Icon1.png"
import icon2 from "../assets/Icon2.png"
import icon3 from "../assets/Icon3.png"
const Solution = () => {
  return (
    <div className='w-3/4 mx-auto  py-12  space-y-6 lg:space-y-0 lg:space-x-8'>
        <div className='flex  justify-center'>

            <div className='w-[22vw] flex flex-col justify-center'>
                <p className='text-center'>Solutions</p>
                <h1 className='text-3xl font-bold text-center'>Revolutionize Your Business with Our AI-Powered Features</h1>

            </div>
</div>
<div className='flex  justify-center'>
            <div className="flex flex-col lg:flex-row  items-center gap-4 py-[10vh]">
                <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                    <div className='w-[1/4] border-t border-gray-300'>
                        <img src={icon} alt="" className='mb-[10vh]'/>
                        
                <h1 className='text-2xl font-bold '>Advanced Question Analytics</h1>
                <p className=''>Predictive analytics to gain actionable insights and forecast question trends.</p>
                    </div>
                    <div className='w-[1/4] border-t border-gray-300'>
                        <img src={icon1} alt="" className='mb-[10vh]'/>
                        <h1 className='text-2xl font-bold '>Operations with Automation</h1>
                <p className=''>Enhance your operational efficiency with our AI-driven automated workflows.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row  items-center gap-4 w-full">
                
                    <div className='w-[1/4] border-t border-gray-300'>
                        <img src={icon2} alt="" className='mb-[10vh]'/>
                        <h1 className='text-2xl font-bold '>Unlock Insights with NLP</h1>
                <p className=''>Language processing to extract meaningful unstructured data.</p>
                    </div>
                    <div className='w-[1/4] border-t border-gray-300'>
                        <img src={icon3} alt="" className='mb-[10vh]'/>
                        <h1 className='text-2xl font-bold '>Custom AI for Your Needs is available</h1>
                <p className=''>Collaborate with our team of AI experts to build and deploy bespoke models.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    
  )
}

export default Solution
