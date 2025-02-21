import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ThemeContext } from "../../context/ThemeContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // Icons for toggle and theme
import Logo from "../../assets/logo.png";
import coinNav from "../../assets/coinNav.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogoutUser = () => {
    userSignOut().then(() => {
      navigate("/login");
    });
  };

  const { data: UserCoin = {} } = useQuery({
    queryKey: ["UserCoin", user?.email],
    queryFn: async () => {
      if (!user?.email) return {};
      const { data } = await axios.get(
        `https://earn-money-platform-server.vercel.app/userCoin/${user?.email}`
      );
      return data || {};
    },
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const commonLinks = (
    <>
      <NavLink to="/" className="font-semibold hover:text-[#00d7c0]">
        Home
      </NavLink>

      <NavLink to="/about" className=" hover:text-[#00d7c0] font-semibold">
        About
      </NavLink>
      <NavLink to="/about" className=" hover:text-[#00d7c0] font-semibold">
        All Tasks
      </NavLink>
      <NavLink to="/contact" className=" hover:text-[#00d7c0] font-semibold">
        Contact
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className=" hover:text-[#00d7c0] font-semibold"
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  const authLinks = user ? (
    <>
      {/* <button
        onClick={handleLogoutUser}
        className=" hover:text-[#00d7c0]"
      >
        Logout
      </button> */}
      {/* <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={user?.photoURL}
          alt="User"
          referrerPolicy="no-referrer"
        />
        <span className="">{UserCoin?.coin} Coins</span>
      </div> */}
    </>
  ) : (
    <>
      <NavLink to="/login" className="font-semibold">
        Login
      </NavLink>
    </>
  );

  return (
    <div className="fixed z-20 w-full backdrop-blur">
      <div className="w-11/12 py-6 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex gap-3 items-center">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={Logo}
              alt="Logo"
            />
            <h2 className="text-3xl font-bold ">Earnify</h2>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center gap-6">
            {commonLinks}
            {authLinks}
            <button onClick={toggleTheme} className="">
              {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <a
              href="https://github.com/walid-official"
              target="_blank"
              className=" btn rounded-md bg-[#00d7c0] hover:bg-[#00d7c0] text-white border-none"
            >
              Join as developer
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden space-x-3">
            <button onClick={toggleTheme} className="">
              {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button onClick={toggleMobileMenu} className="">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="flex flex-col gap-4 p-6 rounded-lg shadow-lg">
              {commonLinks}
              {authLinks}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
