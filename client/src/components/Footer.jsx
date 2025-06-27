import React from 'react'

const Footer = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray to-blue-300 animate-gradient bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%]">
        <hr/>
         <footer className="text-gray-800 mt-12">
        © {new Date().getFullYear()} HireWise AI | Built by Kapil Sharma
      </footer>
      
    </div>
  )
}

export default Footer
