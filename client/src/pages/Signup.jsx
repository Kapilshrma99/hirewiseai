import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${apiUrl}/api/auth/signup`, form);
      localStorage.setItem('hr_token', res.data.token);
      // localStorage.setItem('hr_token', res.data.token);
      localStorage.setItem('hr_email', form.email); // or res.data.name if available

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="pt-30 min-h-screen flex items-center justify-center bg-[linear-gradient(250deg,_#ff2eb3,_#68d6ce,_#9a67ce)] bg-[length:400%_400%] animate-gradient px-4">
  <div className="w-full max-w-md p-8 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">

    <h1 className="text-4xl font-extrabold text-center text-white drop-shadow-md mb-6">
      📝 HR Signup
    </h1>

    {error && (
      <p className="text-red-600 bg-white/50 rounded-md text-center p-2 mb-4 shadow-inner">
        {error}
      </p>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        name="name"
        placeholder="Full Name"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        type="submit"
        className="w-full py-3 font-bold text-white rounded-xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:scale-[1.02]"
      >
        Signup
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-white/90">
      Already have an account?{' '}
      <a href="/login" className="text-white underline font-semibold hover:text-yellow-200 transition">
        Login
      </a>
    </p>
  </div>
</div>

  );
};

export default Signup;
