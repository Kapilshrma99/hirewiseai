// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 

  return (
    <div className="pt-36 text-center px-4 py-8 min-h-screen bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%] animate-gradient">
  <header className="mb-12">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
      HireWise AI
    </h1>
    <p className="text-white/90 text-base sm:text-lg font-medium">
      Smart Hiring with AI-Powered Job Posting & Testing
    </p>
  </header>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
    <Link
      to="/hr-login"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md w-full sm:w-auto"
    >
      Post a Job
    </Link>
    <Link
      to="/dashboard"
      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md w-full sm:w-auto"
    >
      HR Dashboard
    </Link>
  </div>

  <section className="mb-16 max-w-5xl mx-auto text-left px-2">
    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
      Why Use HireWise AI?
    </h2>
    <ul className="space-y-6 bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl text-base sm:text-lg">
      <li>
        <h3 className="text-xl font-bold text-gray-900 mb-1">AI-generated job descriptions</h3>
        <p className="text-gray-700 hover:text-gray-900 transition">
          Instantly create professional, ATS-friendly job descriptions tailored to your company's needs. Just enter the job title and skills — our system does the rest.
        </p>
      </li>
      <li>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Auto-generated MCQ tests</h3>
        <p className="text-gray-700 hover:text-gray-900 transition">
          Automatically generate skill-based MCQ assessments for each role. Save time and assess candidates effectively.
        </p>
      </li>
      <li>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Email-based testing</h3>
        <p className="text-gray-700 hover:text-gray-900 transition">
          Send test links via email and receive results in real time — no manual tracking needed.
        </p>
      </li>
      <li>
        <h3 className="text-xl font-bold text-gray-900 mb-1">HR dashboard insights</h3>
        <p className="text-gray-700 hover:text-gray-900 transition">
          Track candidate progress, compare scores, and manage hiring decisions — all from a central, real-time dashboard.
        </p>
      </li>
    </ul>
  </section>

  <section className="mb-10 px-2">
    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
      For Candidates
    </h2>
    <p className="text-white/90 text-sm sm:text-base">
      Visit the job link shared by the HR, fill out the application, and take the test.
    </p>
  </section>
</div>

  );
};

export default Home;
