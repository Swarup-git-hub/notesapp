// import React from 'react'

// const Viewtasks = () => {
//   return (
//     <div className='bg-red'>
//       <h1>set</h1>
//     </div>
//   )
// }

// export default Viewtasks

// import React from "react";

// const Viewtasks = ({ tasks = [] }) => {   // default to empty array
//   return (
//     <div className="w-full md:w-1/2 p-4">
//       <h2 className="text-xl font-bold mb-4">Tasks</h2>
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">No tasks yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {tasks.map((task, index) => (
//             <li
//               key={index}
//               className="p-3 border rounded-lg shadow-sm bg-gray-100"
//             >
//               <h3 className="font-semibold">{task.title}</h3>
//               <p className="text-gray-700">{task.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Viewtasks;

// import React from "react";

// const Viewtasks = ({ tasks = [], setTasks }) => {
//   // Delete handler
//   const handleDelete = (indexToRemove) => {
//     const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
//     setTasks(updatedTasks);
//   };

//   // Manage handler (for now just logs, later you can implement edit modal/form)
//   const handleManage = (indexToManage) => {
//     const taskToManage = tasks[indexToManage];
//     console.log("Managing task:", taskToManage);
//     // Here you can open a modal or redirect to an edit page
//   };

//   return (
//     <div className="w-full md:w-1/2 p-4">
//       <h2 className="text-xl font-bold mb-4">Tasks</h2>
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">No tasks yet.</p>
//       ) : (
//         <ul className="space-y-3">
//           {tasks.map((task, index) => (
//             <li
//               key={index}
//               className="p-3 border rounded-lg shadow-sm bg-gray-100 flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-semibold">{task.title}</h3>
//                 <p className="text-gray-700">{task.description}</p>
//               </div>

//               {/* Action arrows */}
//               <div className="flex gap-3">
//                 {/* Manage arrow */}
//                 <button
//                   onClick={() => handleManage(index)}
//                   className="text-blue-600 hover:text-blue-800"
//                   title="Manage Task"
//                 >
//                   ➡️
//                 </button>

//                 {/* Delete arrow */}
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="text-red-600 hover:text-red-800"
//                   title="Delete Task"
//                 >
//                   ❌
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Viewtasks;
// -------------------------------------------------------------------------------------------------------------------------
import React, { useState } from "react";

const Viewtasks = ({ tasks = [], setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editTask, setEditTask] = useState({ title: "", description: "" });

  // Delete handler
  const handleDelete = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  // Open edit modal
  const handleManage = (index) => {
    setCurrentTaskIndex(index);
    setEditTask(tasks[index]);
    setIsEditing(true);
  };

  // Handle input change inside modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited task
  const handleSave = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? editTask : task,
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  return (
    <div className="h-screen w-full md:w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        📋 My Tasks
      </h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="p-3 rounded-lg shadow-sm bg-gray-100 
             flex justify-between items-start h-auto"
            >
              <div className="flex-1 p-2 h-auto max-h-40 overflow-y-auto hide-scrollbar">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-gray-700 break-words whitespace-pre-line">
                  {task.description}
                </p>
              </div>

              {/* Action arrows */}
              <div className="flex gap-3 ml-4">
                <button
                  onClick={() => handleManage(index)}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                  title="Delete Task"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4 cursor-pointer">
              ✏️ Edit Task
            </h3>
            <input
              type="text"
              name="title"
              value={editTask.title}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Edit Title"
            />
            <textarea
              name="description"
              value={editTask.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mb-3 mb-3 min-h-[150px] focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Edit Description"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Viewtasks;
