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
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📢 Post a New Job</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="role" placeholder="Job Role" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company Name" className="w-full p-2 border rounded" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Job Location" className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="salaryRange" placeholder="Salary Range (e.g. ₹30K - ₹50K)" className="w-full p-2 border rounded" onChange={handleChange} />
        
        <select name="jobType" className="w-full p-2 border rounded" onChange={handleChange}>
          <option>Full-Time</option>
          <option>Internship</option>
          <option>Part-Time</option>
        </select>

        <input type="text" name="skills" placeholder="Required Skills (comma separated)" className="w-full p-2 border rounded" onChange={handleChange} required />

        <button type="button" onClick={generateDescription} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          {aiLoading ? 'Generating...' : '✨ Generate Description'}
        </button>

        <textarea
          name="description"
          placeholder="Job Description"
          rows={6}
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Posting...' : '📤 Post Job'}
        </button>
      </form>

      {jobId && (
        <div className="mt-6 bg-green-100 text-black border border-green-300 p-4 rounded">
          ✅ Job posted! ID: <strong>{jobId}</strong><br />
          Share Apply Link: <code>{apiUrl}/apply/{jobId}</code>
        </div>
      )}
    </div>
  );
};

export default PostJob;
