// components/LogoutButton.jsx
import { useNavigate } from 'react-router-dom';

const Logoutbuton = ({fun}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token'); 
    fun(false);
    navigate('/login'); 
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default Logoutbuton;
