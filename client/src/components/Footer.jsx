import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="p-6 border-t border-gray-300">
      {/* <hr/> */}
      <div className='flex justify-around py-[10vh]'>

        <div>
           <h1 className="text-2xl font-extrabold text-blue-800">
          <Link to="/">HireWise AI</Link>
        </h1>
        </div>
        <div>
          <h1 className='font-bold'> About</h1>
          <p>Company overview</p>
          <p>Careers</p>
          <p>Press and Media</p>
          <p>Testimonial</p>
        </div>
        <div>
          <h1 className='font-bold'> Resources</h1>
          <p>Blog</p>
          <p>Help center</p>
          <p>Webinar</p>
          <p>Case study</p>
        </div>
        <div>
          <h1 className='font-bold'> Support & contact</h1>
          <p>Contact us</p>
          <p>Technical support</p>
          <p>Feedback</p>
          <p>Consumer support</p>
        </div>
      </div>
        <hr/>
         <footer className="text-gray-800 mt-12">
        © {new Date().getFullYear()} HireWise AI | Built by Kapil Sharma
      </footer>
      
    </div>
  )
}

export default Footer
