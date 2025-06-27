import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Logoutbuton from "./Logoutbuton"
// import Login from '../pages/Login.jsx';
// import Logoutbuton from './Logoutbuton.jsx';
const Navbar = () => {
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
  return (
    <nav className="shadow p-4 w-full bg-gradient-to-br from-gray to-blue-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          <Link to="/">HireWise AI</Link>
        </h1>

        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/post-job" className="text-gray-700 hover:text-blue-600">Post Job</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
           {isLoggedIn ? (
          <Logoutbuton fun= {setIsLoggedIn}/>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}
         

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
