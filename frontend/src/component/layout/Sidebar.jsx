// // import { FiGrid, FiFileText, FiSettings, FiBookOpen } from "react-icons/fi";
// // import { NavLink } from "react-router-dom";

// // const menuItems = [
// //   {
// //     title: "Dashboard",
// //     icon: FiGrid,
// //     path: "/dashboard",
// //   },
// //   {
// //     title: "My Notes",
// //     icon: FiFileText,
// //     path: "/notes",
// //   },
// //   {
// //     title: "Settings",
// //     icon: FiSettings,
// //     path: "/settings",
// //   },
// // ];

// // const Sidebar = () => {
// //   return (
// //     <aside className="w-72 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
// //       {/* Logo */}

// //       <div className="px-8 py-8 border-b border-gray-100">
// //         <div className="flex items-center gap-3">
// //           <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
// //             <FiBookOpen size={24} />
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-bold text-gray-800">NotesApp</h2>

// //             <p className="text-sm text-gray-500">Personal Workspace</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navigation */}

// //       <nav className="flex-1 px-5 py-6">
// //         <p className="px-4 text-xs uppercase tracking-widest text-gray-400 mb-4">
// //           Main Menu
// //         </p>

// //         <div className="space-y-2">
// //           {menuItems.map((item) => {
// //             const Icon = item.icon;

// //             return (
// //               <NavLink
// //                 key={item.path}
// //                 to={item.path}
// //                 className={({ isActive }) =>
// //                   `flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
// //                     isActive
// //                       ? "bg-blue-600 text-white shadow-lg"
// //                       : "text-gray-600 hover:bg-gray-100"
// //                   }`
// //                 }
// //               >
// //                 {({ isActive }) => (
// //                   <>
// //                     <Icon
// //                       size={20}
// //                       className={
// //                         isActive
// //                           ? "text-white"
// //                           : "text-gray-500 group-hover:text-blue-600"
// //                       }
// //                     />

// //                     <span className="font-medium">{item.title}</span>
// //                   </>
// //                 )}
// //               </NavLink>
// //             );
// //           })}
// //         </div>
// //       </nav>

// //       {/* Bottom Card */}

// //       <div className="p-5">
// //         <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-5 shadow-xl">
// //           <h3 className="font-semibold text-lg">Stay Organized</h3>

// //           <p className="text-sm mt-2 text-blue-100 leading-6">
// //             Organize your notes, keep track of your ideas, and never lose
// //             important information.
// //           </p>
// //         </div>
// //       </div>
// //     </aside>
// //   );
// // };

// // export default Sidebar;

// import { NavLink } from "react-router-dom";
// import { FiHome, FiFileText, FiSettings, FiX } from "react-icons/fi";

// const Sidebar = ({ isOpen, onClose }) => {
//   const menuItems = [
//     {
//       name: "Dashboard",
//       path: "/dashboard",
//       icon: <FiHome size={20} />,
//     },
//     {
//       name: "My Notes",
//       path: "/notes",
//       icon: <FiFileText size={20} />,
//     },
//     {
//       name: "Settings",
//       path: "/settings",
//       icon: <FiSettings size={20} />,
//     },
//   ];

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black/40 md:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed left-0 top-0 z-40 h-screen w-64
//           bg-slate-900 text-white shadow-xl
//           transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         {/* Header */}
//         <div className="flex h-16 items-center justify-between border-b border-slate-700 px-6">
//           <h2 className="text-xl font-bold">Notes App</h2>

//           <button
//             onClick={onClose}
//             className="rounded-lg p-2 hover:bg-slate-700 md:hidden"
//           >
//             <FiX size={22} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-6 flex flex-col gap-2 px-4">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               onClick={onClose}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
//                   isActive
//                     ? "bg-blue-600 text-white shadow"
//                     : "text-gray-300 hover:bg-slate-800 hover:text-white"
//                 }`
//               }
//             >
//               {item.icon}

//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Footer */}
//         <div className="absolute bottom-6 left-0 w-full px-6">
//           <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
//             <p className="text-sm font-semibold">MERN Notes</p>

//             <p className="mt-1 text-xs text-gray-400">
//               Secure note management system
//             </p>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;






import {
  FiGrid,
  FiFileText,
  FiSettings,
  FiBookOpen,
  FiX,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: FiGrid,
    path: "/dashboard",
  },
  {
    title: "My Notes",
    icon: FiFileText,
    path: "/notes",
  },
  {
    title: "Settings",
    icon: FiSettings,
    path: "/settings",
  },
];

const Sidebar = ({ isOpen = true, onClose = () => {} }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0
          h-screen w-72
          bg-white
          border-r border-gray-200
          flex flex-col
          shadow-xl
          z-40
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Close Button (Mobile Only) */}
        <div className="absolute right-4 top-4 md:hidden">
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Logo */}
        <div className="px-8 py-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <FiBookOpen size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                NotesApp
              </h2>

              <p className="text-sm text-gray-500">
                Personal Workspace
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-5 py-6">
          <p className="px-4 mb-4 text-xs uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      onClose();
                    }
                  }}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={20}
                        className={
                          isActive
                            ? "text-white"
                            : "text-gray-500 group-hover:text-blue-600"
                        }
                      />

                      <span className="font-medium">
                        {item.title}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Card */}
        <div className="p-5">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-5 text-white shadow-xl">
            <h3 className="text-lg font-semibold">
              Stay Organized
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Organize your notes, keep track of your ideas, and
              never lose important information.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;