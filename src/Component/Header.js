import { useState, useEffect } from "react";
import { NavBar } from ".";
import { Link, useNavigate } from "react-router-dom";
import { userDelete } from "../api/APIS";
import { FaUser } from 'react-icons/fa';
import logo from "../Image/logo.png";
import toast, { Toaster } from "react-hot-toast";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    setEmail(null);
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      const res = await userDelete();
      console.log(res.data); 
      toast.success(res.msg);
      handleLogout();  
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Error deleting account");
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 p-6 bg-white  shadow-xl z-50">
      <Toaster />
      <div className="md:mx-20 flex  justify-between  items-center">
        <img src={logo} alt="Logo" className="w-10 h-10"/>
        <div className="flex space-x-4 ">
          {NavBar.map((item, i) => (
            <nav key={i}>
              <div className="font-bold">{item.name}</div>
            </nav>
          ))}
        </div>
        <div className="relative">
          {email ? (
            <div
              className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer"
              onClick={toggleDropdown}
            >
              <ul className="flex justify-center items-center gap-4"><FaUser/>{email}</ul>
            </div>
          ) : (
            <div className="flex gap-10">
              <Link to="/login" className="font-bold">
                Login
              </Link>
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </div>
          )}
          {email && isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <Link to="/manageprofile" className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200">Profile</Link>
              <div onClick={handleDeleteAccount} className="block px-4 cursor-pointer py-2 text-gray-800 hover:bg-gray-200">Delete Account</div>
              <div onClick={handleLogout} className="block px-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
