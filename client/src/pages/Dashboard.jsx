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
    
    <div className="p-6 max-w-6xl ">
    <h1 className="text-2xl font-bold mb-4 mx-auto">HR Dashboard</h1>  

      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            className="mb-6 p-4 border rounded-xl shadow bg-blue-800"
          >
            <h2 className="text-xl font-semibold">{job.role} @ {job.company}</h2>
            <p className="text-sm text-gray-500">Salary: {job.salaryRange}</p>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Candidates:</h3>
              {job.candidates.length === 0 ? (
                <p className="text-gray-600">No candidates applied.</p>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border bg-blue-300 text-black">Name</th>
                      
                      <th className="p-2 border bg-blue-300 text-black">Email</th>
                      <th className="p-2 border bg-blue-300 text-black">Score</th>
                      <th className="p-2 border bg-blue-300 text-black">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.candidates.map((c) => (
                      <tr key={c._id}>
                        <td className="p-2 border">{c.name}</td>
                        <td className="p-2 border">{c.email}</td>
                        <td className="p-2 border">{c.testScore || 'N/A'}%</td>
                        <td className="p-2 border">
                          {c.passedTest === true ? (
                            <span className="text-green-600 font-bold">✅ Pass</span>
                          ) : c.passedTest === false ? (
                            <span className="text-red-600 font-bold">❌ Fail</span>
                          ) : (
                            <span className="text-gray-500">⏳ Not Attempted</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default Dashboard;
