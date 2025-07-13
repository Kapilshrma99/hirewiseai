import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [form, setForm] = useState({name:'', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, form);
      localStorage.setItem('hr_token', res.data.token);
      // localStorage.setItem('hr_token', res.data.token);
      localStorage.setItem('hr_email', form.email); // or res.data.name if available
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
      window.location.reload();

    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 ">
  <div className="w-full max-w-md p-8 bg-black/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">

    {/* Heading */}
    <h1 className="text-5xl font-extrabold text-center text-white drop-shadow-md mb-6 tracking-tight">
      HR Login
    </h1>

    {/* Error */}
    {error && (
      <p className="text-red-600 text-center font-semibold mb-4 bg-white/40 p-2 rounded-lg shadow-inner">
        {error}
      </p>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full px-5 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner transition"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="w-full px-5 py-3 bg-white/80 text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner transition"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 font-bold text-white rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:scale-[1.02]"
      >
        Login
      </button>
    </form>

    {/* Signup */}
    <p className="mt-6 text-center text-sm text-white/90">
      Don&apos;t have an account?{' '}
      <a href="/signup" className="text-white underline font-semibold hover:text-yellow-200 transition">
        Signup
      </a>
    </p>
  </div>
</div>
  )
};

export default Login;
