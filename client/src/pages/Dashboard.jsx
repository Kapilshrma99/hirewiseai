import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

const token = localStorage.getItem('hr_token');
// const navigate=useNavigate()
const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
const navigate=useNavigate()

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!loggedIn) navigate('/login');
    const fetchDashboard = async () => {
      // const token = localStorage.getItem('hr_token');
       
      try {
        const res = await axios.get(`${apiUrl}/api/hr/jobs`,{
    headers: {
      Authorization: `Bearer ${token}`
    }});
        setJobs(res.data.jobs);
      } catch (err) {
        console.error('Error loading dashboard:', err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <>
    
    <div className="pt-40 min-h-screen px-4 py-12 bg-gradient-to-br from-[#ff7eb3] via-[#65d6ce] to-[#6a67ce] bg-[length:400%_400%] animate-gradient">
  <div className="max-w-7xl mx-auto">

    <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-lg mb-14">💼 HR Dashboard</h1>

    {jobs.length === 0 ? (
      <p className="text-white text-center text-xl italic">No jobs found.</p>
    ) : (
      <div className="space-y-12">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Job Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-blue-900">{job.role}</h2>
              <p className="text-lg text-gray-800">🏢 {job.company}</p>
              <p className="text-gray-700 mt-1">💰 <span className="font-semibold">{job.salaryRange || 'N/A'}</span></p>
            </div>

            {/* Candidates */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">👥 Candidates</h3>

              {job.candidates.length === 0 ? (
                <p className="text-gray-700 italic">No candidates have applied for this job.</p>
              ) : (
                <div className="overflow-x-auto rounded-xl border border-gray-300 shadow-md">
                  <table className="min-w-full text-sm text-gray-800 bg-white rounded-xl">
                    <thead>
                      <tr className="bg-blue-200 text-blue-900">
                        <th className="p-3 text-left">👤 Name</th>
                        <th className="p-3 text-left">✉️ Email</th>
                        <th className="p-3 text-left">📊 Score</th>
                        <th className="p-3 text-left">✅ Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {job.candidates.map((c, idx) => (
                        <tr
                          key={c._id}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
                        >
                          <td className="p-3">{c.name}</td>
                          <td className="p-3">{c.email}</td>
                          <td className="p-3">{c.testScore != null ? `${c.testScore}%` : 'N/A'}</td>
                          <td className="p-3">
                            {c.passedTest === true ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-green-700 bg-green-100 font-semibold text-sm shadow-sm">
                                ✅ Passed
                              </span>
                            ) : c.passedTest === false ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-red-700 bg-red-100 font-semibold text-sm shadow-sm">
                                ❌ Failed
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-gray-700 bg-gray-200 font-medium text-sm shadow-sm">
                                ⏳ Not Attempted
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>


    </>
  );
};

export default Dashboard;
