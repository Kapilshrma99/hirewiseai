// import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/02.png"
const Home = () => {
 

  return (
    <section className="w-3/4 mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between py-12  space-y-6 lg:space-y-0 lg:space-x-8">
  {/* Text + Buttons */}
  <div className="max-w-xl">
    <h1 className="font-extrabold text-5xl mb-6">
      Unleash The Power of AI Recruitment
    </h1>
    <p className="mb-8 text-lg">
      Step into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.
    </p>
    <div>
      <Link
        to="/login"
        className="bg-green-800 text-white font-bold rounded-3xl px-6 py-3 mr-4"
      >
        Log In
      </Link>
      <button className="border border-gray-700 rounded-3xl px-6 py-3">
        Learn more
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="ml-8 w-full sm:w-[80%] md:w-[60%] lg:w-auto">
    <img src={image} alt="AI Recruitment"  />
  </div>
</section>

//     <div className="text-center px-4 py-8 min-h-screen">
//   <header className="mb-12">
//     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
//       HireWise AI
//     </h1>
//     <p className="text-white/90 text-base sm:text-lg font-medium">
//       Smart Hiring with AI-Powered Job Posting & Testing
//     </p>
//   </header>

//   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
//     <Link
//       to="/hr-login"
//       className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md w-full sm:w-auto"
//     >
//       Post a Job
//     </Link>
//     <Link
//       to="/dashboard"
//       className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md w-full sm:w-auto"
//     >
//       HR Dashboard
//     </Link>
//   </div>

//   <section className="mb-16 max-w-5xl mx-auto text-left px-2">
//     <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
//       Why Use HireWise AI?
//     </h2>
//     <ul className="space-y-6 bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl text-base sm:text-lg">
//       <li>
//         <h3 className="text-xl font-bold text-gray-900 mb-1">AI-generated job descriptions</h3>
//         <p className="text-gray-700 hover:text-gray-900 transition">
//           Instantly create professional, ATS-friendly job descriptions tailored to your company's needs. Just enter the job title and skills — our system does the rest.
//         </p>
//       </li>
//       <li>
//         <h3 className="text-xl font-bold text-gray-900 mb-1">Auto-generated MCQ tests</h3>
//         <p className="text-gray-700 hover:text-gray-900 transition">
//           Automatically generate skill-based MCQ assessments for each role. Save time and assess candidates effectively.
//         </p>
//       </li>
//       <li>
//         <h3 className="text-xl font-bold text-gray-900 mb-1">Email-based testing</h3>
//         <p className="text-gray-700 hover:text-gray-900 transition">
//           Send test links via email and receive results in real time — no manual tracking needed.
//         </p>
//       </li>
//       <li>
//         <h3 className="text-xl font-bold text-gray-900 mb-1">HR dashboard insights</h3>
//         <p className="text-gray-700 hover:text-gray-900 transition">
//           Track candidate progress, compare scores, and manage hiring decisions — all from a central, real-time dashboard.
//         </p>
//       </li>
//     </ul>
//   </section>

//   <section className="mb-10 px-2">
//     <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
//       For Candidates
//     </h2>
//     <p className="text-white/90 text-sm sm:text-base">
//       Visit the job link shared by the HR, fill out the application, and take the test.
//     </p>
//   </section>
// </div>

  );
};

export default Home;
