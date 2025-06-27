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
<div className="p-6 bg-gradient-to-br from-gray to-blue-300 animate-gradient bg-[linear-gradient(250deg,_#ff7eb3,_#65d6ce,_#6a67ce)] bg-[length:400%_400%]">
      <h1 className="text-2xl font-bold mb-4">Apply for this Job</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="url"
          name="resumeLink"
          placeholder="Resume Link (Google Drive, etc.)"
          value={form.resumeLink}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>

  )
}

export default ApplyForm
