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
    <div className="flex justify-center items-center h-screen p-6  mx-auto  bg-gradient-to-br from-gray to-blue-100 min-h-screen animate-gradient bg-[linear-gradient(250deg,_#ff2eb3,_#68d6ce,_#9a67ce)] bg-[length:400%_400%]">
      <div>
      <h1 className=" text-8xl font-bold mb-4">HR Login</h1>
      <br/>
      {error && <p className="text-red-500">{error}</p>}
      <br/>
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-80 border p-2 rounded"
        />
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-80 border p-2 rounded"
        />
                <br/>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-50">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account? <a href="/signup" className="text-blue-600 underline">Signup</a>
      </p>
      </div>
    </div>
  );
};

export default Login;
