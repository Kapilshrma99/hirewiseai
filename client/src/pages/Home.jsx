// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 

  return (
    <div className="text-center p-6 bg-gradient-to-br from-gray to-blue-300 min-h-screen animate-gradient bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%]">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-2">HireWise AI</h1>
        <p className="text-gray-800">Smart Hiring with AI-Powered Job Posting & Testing</p>
      </header>

      <div className="space-x-4 mb-10">
        <Link to="/hr-login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Post a Job
        </Link>
        <Link to="/dashboard" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          HR Dashboard
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Use HireWise AI?</h2>
        <ul className=" list-inside text-left max-w-xl mx-auto border drop-shadow-lg rounded-lg bg-blue-200">
          <li className='text-black font-bold'>AI-generated job descriptions
            <p className='text-blue-500 hover:text-gray-700'>Say goodbye to manual drafting — our AI-powered system instantly creates professional, role-specific job descriptions tailored to your company's needs. Just enter the job title and required skills, and our intelligent engine crafts a compelling, ATS-friendly description that attracts the right candidates. It's fast, accurate, and designed to save you hours of HR effort while improving hiring quality.</p>
          </li>
          <li className='text-black font-bold'> Auto-generated MCQ tests based on role
            <p className='text-blue-500 hover:text-gray-700'>Streamline your hiring process with intelligent, role-specific MCQ tests generated automatically by our system. Whether you're hiring developers, marketers, or data analysts, our platform creates targeted multiple-choice assessments tailored to the skills and responsibilities of each role. Save time, ensure candidate relevance, and evaluate talent more effectively — all with zero manual effort.</p>

          </li>
          <li className='text-black font-bold'> Email-based test link & result system
            <p className='text-blue-500 hover:text-gray-700'>Easily send test invitations and receive candidate results — all through email. Our platform automatically delivers personalized test links to applicants' inboxes and tracks their progress in real time. Once completed, results are instantly compiled and shared with your team, allowing for quick and efficient evaluation without the need for constant follow-ups or manual tracking.</p>

          </li>
          <li className='text-black font-bold'> HR dashboard for real-time results
            <p className='text-blue-500 hover:text-gray-700'>Stay in control with a powerful HR dashboard that gives you instant access to candidate test performance and application status. Track real-time results, monitor progress, and compare scores across roles — all from one intuitive interface. Our dashboard empowers hiring teams to make faster, data-driven decisions with complete transparency and ease.</p>

          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">For Candidates</h2>
        <p className="text-gray-700">Visit the job link shared by the HR, fill the application, and take the test.</p>
      </section>

     
    </div>
  );
};

export default Home;
