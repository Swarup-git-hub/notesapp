// // import './App.css'
// import { Route, Routes } from "react-router-dom";
// import Navsection from "./component/Navsection";
// import Taskwriting from "./Taskwriting";
// import Viewtasks from "./Viewtasks";

// function App() {
//   return (
//     <div className="App">
//       <Navsection />
//       <Routes>
//         <Route path="/" element={<Taskwriting tasks={tasks}/>} settasks={settasks}/>
//         <Route path="/viewtasks" element={<Viewtasks tasks={tasks}/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// App.jsx
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navsection from "./component/Navsection";
import Taskwriting from "./Taskwriting";
import Viewtasks from "./Viewtasks";

function App() {
  // Shared state for all tasks
  const [animate, setAnimate] = useState("opacity-0 translate-x-10");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    setAnimate("opacity-0 translate-x-10");
     const timer = setTimeout(() => {
      setAnimate("opacity-100 translate-x-0");
    }, 50);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Navsection />
      <div className={`transition-all duration-500 ease-in-out ${animate}`}>
        <Routes>
          {/* Pass tasks + setTasks to Taskwriting */}
          <Route
            path="/"
            element={<Taskwriting tasks={tasks} setTasks={setTasks} />}
          />
          {/* Pass tasks to Viewtasks */}
          <Route
            path="/viewtasks"
            element={<Viewtasks tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
