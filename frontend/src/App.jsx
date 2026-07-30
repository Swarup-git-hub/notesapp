// // // // import './App.css'
// // // import { Route, Routes } from "react-router-dom";
// // // import Navsection from "./component/Navsection";
// // // import Taskwriting from "./Taskwriting";
// // // import Viewtasks from "./Viewtasks";

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <Navsection />
// // //       <Routes>
// // //         <Route path="/" element={<Taskwriting tasks={tasks}/>} settasks={settasks}/>
// // //         <Route path="/viewtasks" element={<Viewtasks tasks={tasks}/>} />
// // //       </Routes>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // App.jsx
// // import React, { useState, useEffect } from "react";
// // import { Route, Routes } from "react-router-dom";
// // import Navsection from "./component/Navsection";
// // import Taskwriting from "./Taskwriting";
// // import Viewtasks from "./Viewtasks";

// // function App() {
// //   // Shared state for all tasks
// //   const [animate, setAnimate] = useState("opacity-0 translate-x-10");
// //   const [tasks, setTasks] = useState(() => {
// //     const saved = localStorage.getItem("tasks");
// //     return saved ? JSON.parse(saved) : [];
// //   });

// //   // Save tasks to localStorage whenever they change
// //   useEffect(() => {
// //     setAnimate("opacity-0 translate-x-10");
// //      const timer = setTimeout(() => {
// //       setAnimate("opacity-100 translate-x-0");
// //     }, 50);
// //     localStorage.setItem("tasks", JSON.stringify(tasks));
// //   }, [tasks]);

// //   return (
// //     <div className="App">
// //       <Navsection />
// //       <div className={`transition-all duration-500 ease-in-out ${animate}`}>
// //         <Routes>
// //           {/* Pass tasks + setTasks to Taskwriting */}
// //           <Route
// //             path="/"
// //             element={<Taskwriting tasks={tasks} setTasks={setTasks} />}
// //           />
// //           {/* Pass tasks to Viewtasks */}
// //           <Route
// //             path="/viewtasks"
// //             element={<Viewtasks tasks={tasks} setTasks={setTasks} />}
// //           />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Dashboard from "./component/pages/Dashboard";
import MyNotes from "./component/pages/MyNotes";
import Settings from "./component/pages/Settings";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Notes */}
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <MyNotes />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Invalid Route */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
  );
}

export default App;


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./component/pages/Login";
// import Register from "./component/pages/Register";
// import Dashboard from "./component/pages/Dashboard";
// import MyNotes from "./component/pages/MyNotes";
// import Settings from "./component/pages/Settings";

// import ProtectedRoute from "./component/ProtectedRoute";

// const App = () => {
//   const token = localStorage.getItem("token");

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default Route */}

//         <Route
//           path="/"
//           element={
//             token ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />

//         {/* Public Routes */}

//         <Route
//           path="/login"
//           element={
//             token ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <Login />
//             )
//           }
//         />

//         <Route
//           path="/register"
//           element={
//             token ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <Register />
//             )
//           }
//         />

//         {/* Protected Routes */}

//         <Route element={<ProtectedRoute />}></Route>
//                 {/* Dashboard */}

//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         />

//         {/* My Notes */}

//         <Route
//           path="/notes"
//           element={<MyNotes />}
//         />

//         {/* Settings */}

//         <Route
//           path="/settings"
//           element={<Settings />}
//         />
//       </Route>

//       {/* 404 */}

//       <Route
//         path="*"
//         element={<Navigate to="/" replace />}
//       />
//     </Routes>
//   </BrowserRouter>
//   );
// };

// export default App;