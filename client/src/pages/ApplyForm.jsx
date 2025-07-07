import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const ApplyForm = () => {
  const {jobId} =useParams()
  const [form, setForm] = useState({ name: '', email: '', phone: '', resumeLink: '', });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post(`${apiUrl}/api/form/apply/${jobId}`, form);
      setSubmitted(true);
    } catch (err) {
      console.log(err)
      setError('Something went wrong. Please try again.');
    }
  };
    if (submitted) {
    return (
      <div className="p-6 text-center text-green-600 text-xl">
        ✅ Your application has been submitted!
      </div>
    );
  }
  
  return (
<div className="min-h-screen flex items-center justify-center px-4 bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%] animate-gradient">
  <div className="w-full max-w-lg bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10">

    <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white drop-shadow-md mb-6">
      Apply for this Job
    </h1>

    {error && (
      <p className="text-red-600 bg-white/50 text-center p-2 rounded-lg shadow-inner mb-4 font-medium">
        {error}
      </p>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />

      <input
        type="url"
        name="resumeLink"
        placeholder="Resume Link (Google Drive, etc.)"
        value={form.resumeLink}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 placeholder-gray-500 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        required
      />

      <button
        type="submit"
        className="w-full py-3 font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:scale-[1.02]"
      >
        Submit Application
      </button>
    </form>
  </div>
</div>

  )
}

export default ApplyForm
