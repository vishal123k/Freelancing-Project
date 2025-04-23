import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/Logo.svg";
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged Out");
  };

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1600px] py-4 mx-auto border-b">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={40} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/findtalent">Find Talent</Link>
          </li>
          <li>
            <Link to="/findwork">Find Work</Link>
          </li>
          <li>
            <Link to="/">Himanshu</Link>
          </li>
          <li>
            <Link to="/">Vishal</Link>
          </li>
          <li>
            <Link to="/">Om Jindal</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
            <Link to="/dashboard">
              <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
