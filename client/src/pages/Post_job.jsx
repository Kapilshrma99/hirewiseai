import { useState ,useEffect} from 'react';
import axios from 'axios';
const token = localStorage.getItem('hr_token');
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;


const PostJob = () => {
  const navigate=useNavigate()
  useEffect(() => {
  const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!loggedIn) navigate('/login');
}, []);
  const [form, setForm] = useState({
    role: '',
    company: '',
    location: '',
    salaryRange: '',
    jobType: 'Full-Time',
    skills: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [jobId, setJobId] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateDescription = async () => {
    if (!form.role || !form.skills) return alert("Please enter role and skills first.");
    setAiLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/description`, {//new
         role: form.role,
        company: form.company,
        salaryRange: form.salaryRange,
        location: form.location,
        
        jobType: form.skills
      },{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
      setForm({ ...form, description: res.data.description });
    //   console.log(res)
    } catch (err) {
      console.error("AI generation failed:", err);
      alert("Failed to generate description.");
    }
    setAiLoading(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/job`, form,  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
      setJobId(res.data.newJob._id);
    } catch (err) {
        console.log("error in Post_job   "+err)
      alert('Error posting job');
    }
    setLoading(false);
  };

  return (
   <div className="pt-40 min-h-screen flex items-center justify-center px-4 bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%] animate-gradient py-10">
  <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">

    <h1 className="text-3xl font-extrabold text-center text-white drop-shadow-md mb-6">
      📢 Post a New Job
    </h1>

    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="role"
        placeholder="Job Role"
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <input
        type="text"
        name="location"
        placeholder="Job Location"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <input
        type="text"
        name="salaryRange"
        placeholder="Salary Range (e.g. ₹30K - ₹50K)"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <select
        name="jobType"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/80 text-gray-800 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      >
        <option>Full-Time</option>
        <option>Internship</option>
        <option>Part-Time</option>
      </select>

      <input
        type="text"
        name="skills"
        placeholder="Required Skills (comma separated)"
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      />

      <button
        type="button"
        onClick={generateDescription}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-md hover:scale-[1.02]"
      >
        {aiLoading ? 'Generating...' : '✨ Generate Description'}
      </button>

      <textarea
        name="description"
        placeholder="Job Description"
        rows={6}
        value={form.description}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-3 rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-md hover:scale-[1.02]"
      >
        {loading ? 'Posting...' : '📤 Post Job'}
      </button>
    </form>

    {jobId && (
      <div className="mt-6 bg-green-200/60 border border-green-400 text-green-900 p-4 rounded-xl text-sm shadow-md">
        ✅ <strong>Job posted!</strong> ID: <span className="font-mono">{jobId}</span><br />
        📎 <strong>Apply Link:</strong> <code className="break-all">{`${apiUrl}/apply/${jobId}`}</code>
      </div>
    )}
  </div>
</div>
  )
};

export default PostJob;
