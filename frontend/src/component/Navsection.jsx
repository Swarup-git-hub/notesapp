// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const Navsection = () => {
//   return (
//     <div className='flex bg-blue-100 p-4 justify-center gap-30'>
//       <Link to="/"> <span className='text-black text-2xl cursor-pointer'title='Home'>📘</span> </Link>
//       <Link to="/viewtasks"> <span className='text-black text-2xl cursor-pointer animate-pulse' title='My Tasks'>📋</span> </Link>
//     </div>
//   )
// }

// export default Navsection

import { useNavigate } from "react-router-dom";

const Navsection = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className=" bg-blue-500 text-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">Notes Maker</h1>
          <p className="text-sm text-blue-100">Notes Management System</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="font-semibold">{user?.name || "User"}</p>

            <p className="text-sm text-blue-100">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navsection;