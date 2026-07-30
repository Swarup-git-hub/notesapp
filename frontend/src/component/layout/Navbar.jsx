// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";
// import ConfirmDialog from "../ui/ConfirmDialog";

// const Navbar = ({ title = "Dashboard" }) => {
//   const navigate = useNavigate();

//   const [showLogoutDialog, setShowLogoutDialog] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user")) || {};

//   const username = user?.name || "Guest User";

//   const initials = username
//     .split(" ")
//     .map((name) => name[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase();

//   const confirmLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     navigate("/login");
//   };

//   return (
//     <>
//       <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
//         <div className="flex items-center justify-between px-8 py-4">
//           {/* Left */}
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

//             <p className="mt-1 text-sm text-gray-500">
//               Organize your notes efficiently.
//             </p>
//           </div>

//           {/* Right */}
//           <div className="flex items-center gap-5">
//             {/* Search */}
//             <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">
//               <FiSearch className="text-gray-400" />

//               <input
//                 type="text"
//                 placeholder="Search notes..."
//                 className="ml-3 w-full bg-transparent text-sm outline-none"
//               />
//             </div>

//             {/* Notification */}
//             <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition hover:bg-gray-200">
//               <FiBell size={19} />

//               <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
//             </button>

//             {/* User */}
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
//                 {initials}
//               </div>

//               <div className="hidden md:block">
//                 <p className="font-semibold text-gray-800">{username}</p>

//                 <p className="text-xs text-gray-500">{user?.email || ""}</p>
//               </div>
//             </div>

//             {/* Logout */}
//             <button
//               onClick={() => setShowLogoutDialog(true)}
//               className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
//             >
//               <FiLogOut />

//               <span className="hidden md:block">Logout</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       <ConfirmDialog
//         open={showLogoutDialog}
//         title="Logout"
//         message="Are you sure you want to logout from your account?"
//         confirmText="Logout"
//         cancelText="Cancel"
//         confirmColor="red"
//         onCancel={() => setShowLogoutDialog(false)}
//         onConfirm={confirmLogout}
//       />
//     </>
//   );
// };

// export default Navbar;

// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiMenu, FiLogOut, FiUser } from "react-icons/fi";

// // import ConfirmDialog from "../ui/ConfirmDialog";

// // const Navbar = ({ title = "Dashboard", onMenuClick }) => {
// //   const navigate = useNavigate();

// //   const [showConfirm, setShowConfirm] = useState(false);

// //   const user = JSON.parse(localStorage.getItem("user")) || {};

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");

// //     navigate("/login", { replace: true });
// //   };

// //   return (
// //     <>
// //       <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
// //         {/* Left Section */}
// //         <div className="flex items-center gap-4">
// //           <button
// //             onClick={onMenuClick}
// //             className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
// //           >
// //             <FiMenu size={22} />
// //           </button>

// //           <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
// //         </div>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-4">
// //           <div className="hidden items-center gap-3 rounded-xl bg-gray-100 px-4 py-2 sm:flex">
// //             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
// //               <FiUser />
// //             </div>

// //             <div>
// //               <p className="font-semibold text-gray-800">
// //                 {user?.name || "User"}
// //               </p>

// //               <p className="text-xs text-gray-500">{user?.email || ""}</p>
// //             </div>
// //           </div>

// //           <button
// //             onClick={() => setShowConfirm(true)}
// //             className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
// //           >
// //             <FiLogOut />
// //             <span className="hidden sm:inline">Logout</span>
// //           </button>
// //         </div>
// //       </header>

// //       <ConfirmDialog
// //         open={showConfirm}
// //         title="Logout"
// //         message="Are you sure you want to logout?"
// //         confirmText="Logout"
// //         cancelText="Cancel"
// //         onCancel={() => setShowConfirm(false)}
// //         onConfirm={handleLogout}
// //       />
// //     </>
// //   );
// // };

// // export default Navbar;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBell,
  FiLogOut,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import ConfirmDialog from "../ui/ConfirmDialog";

const Navbar = ({ title = "Dashboard", onMenuClick }) => {
  const navigate = useNavigate();

  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const username = user?.name || "Guest User";

  const initials = username
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const confirmLogout = () => {
    setShowLogoutDialog(false);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="md:hidden rounded-lg p-2 transition hover:bg-gray-100"
            >
              <FiMenu size={22} />
            </button>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

              <p className="mt-1 text-sm text-gray-500">
                Organize your notes efficiently.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-xl px-4 py-2 w-72">
              <FiSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search notes..."
                className="ml-3 w-full bg-transparent text-sm outline-none"
              />
            </div>

            {/* Notification */}
            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition hover:bg-gray-200">
              <FiBell size={19} />

              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                {initials}
              </div>

              <div className="hidden md:block">
                <p className="font-semibold text-gray-800">{username}</p>

                <p className="text-xs text-gray-500">
                  {user?.email || ""}
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={() => setShowLogoutDialog(true)}
              className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
            >
              <FiLogOut />

              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <ConfirmDialog
        open={showLogoutDialog}
        title="Logout"
        message="Are you sure you want to logout from your account?"
        confirmText="Logout"
        cancelText="Cancel"
        confirmColor="red"
        onCancel={() => setShowLogoutDialog(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
};

export default Navbar;