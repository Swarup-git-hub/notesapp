// import { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiUser, FiMail, FiShield, FiInfo, FiLogOut } from "react-icons/fi";

// import DashboardLayout from "../layout/DashboardLayout";

// const Settings = () => {
//   const navigate = useNavigate();

//   const user = useMemo(() => {
//     const stored = localStorage.getItem("user");

//     return stored ? JSON.parse(stored) : null;
//   }, []);

//   const initials = user?.name
//     ? user.name
//         .split(" ")
//         .map((word) => word[0])
//         .join("")
//         .toUpperCase()
//     : "U";

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     navigate("/login");
//   };

//   return (
//     <DashboardLayout>
//       <div className="space-y-8">
//         {/* Header */}

//         <div>
//           {/* <h1 className="text-3xl font-bold text-gray-800">Settings</h1> */}

//           <p className="mt-2 text-gray-500">
//             Manage your account and application information.
//           </p>
//         </div>

//         {/* Profile Card */}

//         <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
//           <div className="flex flex-col items-center md:flex-row md:items-center gap-6">
//             <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
//               {initials}
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">
//                 {user?.name || "Guest User"}
//               </h2>

//               <p className="mt-2 text-gray-500">{user?.email || "No Email"}</p>
//             </div>
//           </div>
//         </div>

//         {/* Information Cards */}

//         <div className="grid gap-6 lg:grid-cols-2">
//           {/* Account */}

//           <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FiUser size={24} className="text-blue-600" />

//               <h2 className="text-xl font-bold">Account Information</h2>
//             </div>

//             <div className="space-y-5">
//               <div>
//                 <p className="text-sm text-gray-500">Name</p>

//                 <p className="font-semibold">{user?.name || "-"}</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-500">Email</p>

//                 <div className="flex items-center gap-2">
//                   <FiMail className="text-gray-400" />

//                   <p className="font-semibold">{user?.email || "-"}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Application */}

//           <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FiInfo size={24} className="text-green-600" />

//               <h2 className="text-xl font-bold">Application</h2>
//             </div>

//             <div className="space-y-5">
//               <div>
//                 <p className="text-sm text-gray-500">Application</p>

//                 <p className="font-semibold">Notes Maker</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-500">Version</p>

//                 <p className="font-semibold">v1.0.0</p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-500">Built With</p>

//                 <p className="font-semibold">React • Express • MongoDB</p>
//               </div>
//             </div>
//           </div>

//           {/* Security */}

//           <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FiShield size={24} className="text-purple-600" />

//               <h2 className="text-xl font-bold">Security</h2>
//             </div>

//             <p className="text-gray-600 leading-7">
//               Your account is protected using JWT authentication. Login
//               information is securely stored during your session.
//             </p>
//           </div>

//           {/* Logout */}

//           <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 flex flex-col justify-between">
//             <div>
//               <h2 className="text-xl font-bold mb-3">Logout</h2>

//               <p className="text-gray-600">
//                 Sign out from your Notes Maker account.
//               </p>
//             </div>

//             <button
//               onClick={handleLogout}
//               className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-red-600 py-3 text-white font-semibold transition hover:bg-red-700"
//             >
//               <FiLogOut />
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Settings;

import { useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiShield, FiLogOut, FiInfo } from "react-icons/fi";

import { useState } from "react";

import DashboardLayout from "../layout/DashboardLayout";
import ConfirmDialog from "../ui/ConfirmDialog";

const Settings = () => {
  const navigate = useNavigate();

  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const username = user?.name || "Guest User";

  const initials = username
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <>
      <DashboardLayout>
        <div className="space-y-8">
          {/* Profile Card */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
                {initials}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">{username}</h2>

                <p className="mt-2 text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Account */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Account Information</h2>

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                <FiUser size={22} className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">Full Name</p>

                  <p className="font-semibold">{username}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                <FiMail size={22} className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="font-semibold">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Security</h2>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5">
              <div className="flex items-center gap-4">
                <FiShield size={22} className="text-green-600" />

                <div>
                  <p className="font-semibold">Authentication</p>

                  <p className="text-sm text-gray-500">
                    JWT Token Authentication
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Active
              </span>
            </div>
          </div>

          {/* App Info */}

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Application</h2>

            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5">
              <FiInfo size={22} className="text-purple-600" />

              <div>
                <p className="font-semibold">Notes Maker</p>

                <p className="text-sm text-gray-500">Version 1.0</p>
              </div>
            </div>
          </div>

          {/* Logout */}

          <div className="flex justify-end">
            <button
              onClick={() => setShowLogoutDialog(true)}
              className="flex items-center gap-3 rounded-xl bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </DashboardLayout>

      <ConfirmDialog
        open={showLogoutDialog}
        title="Logout"
        message="Are you sure you want to logout?"
        confirmText="Logout"
        cancelText="Cancel"
        confirmColor="red"
        onCancel={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Settings;