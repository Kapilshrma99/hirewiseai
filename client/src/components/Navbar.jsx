import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logoutbuton from "./Logoutbuton"
// import Login from '../pages/Login.jsx';
// import Logoutbuton from './Logoutbuton.jsx';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // On mount, check login status
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  },[]);

  // const handleLogout = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   localStorage.removeItem('token'); // optional if you're using token
  //   setIsLoggedIn(false);
  //   navigate('/login');
  // };
  // bg-white/70 bg-gradient-to-r from-blue-100 to-blue-300
  return (
     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2  backdrop-blur-md border border-white/30
 shadow-md  p-4 rounded-full max-w-[95%] md:max-w-3xl w-full bg-transparent bg-blue/30 z-50
">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-24 ">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-800">
          <Link to="/">HireWise AI</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition">Home</Link>
          <Link to="/post-job" className="text-gray-700 hover:text-blue-700 font-medium transition">Post Job</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-700 font-medium transition">Dashboard</Link>

          {isLoggedIn ? (
            <Logoutbuton fun={setIsLoggedIn} />
          ) : (
            <>
              <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
              <Link to="/signup" className="text-blue-700 hover:underline">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-800 focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3 bg-white shadow-lg rounded-md">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/post-job" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Post Job</Link>
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Dashboard</Link>

          {isLoggedIn ? (
            <div onClick={() => setMenuOpen(false)}>
              <Logoutbuton fun={setIsLoggedIn} />
            </div>
          ) : (
            <>
              <Link to="/login" className="block text-blue-700 hover:underline" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="block text-blue-700 hover:underline" onClick={() => setMenuOpen(false)}>Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
