// // import React from 'react'

// // const Viewtasks = () => {
// //   return (
// //     <div className='bg-red'>
// //       <h1>set</h1>
// //     </div>
// //   )
// // }

// // export default Viewtasks

// // import React from "react";

// // const Viewtasks = ({ tasks = [] }) => {   // default to empty array
// //   return (
// //     <div className="w-full md:w-1/2 p-4">
// //       <h2 className="text-xl font-bold mb-4">Tasks</h2>
// //       {tasks.length === 0 ? (
// //         <p className="text-gray-500">No tasks yet.</p>
// //       ) : (
// //         <ul className="space-y-3">
// //           {tasks.map((task, index) => (
// //             <li
// //               key={index}
// //               className="p-3 border rounded-lg shadow-sm bg-gray-100"
// //             >
// //               <h3 className="font-semibold">{task.title}</h3>
// //               <p className="text-gray-700">{task.description}</p>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default Viewtasks;

// // import React from "react";

// // const Viewtasks = ({ tasks = [], setTasks }) => {
// //   // Delete handler
// //   const handleDelete = (indexToRemove) => {
// //     const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
// //     setTasks(updatedTasks);
// //   };

// //   // Manage handler (for now just logs, later you can implement edit modal/form)
// //   const handleManage = (indexToManage) => {
// //     const taskToManage = tasks[indexToManage];
// //     console.log("Managing task:", taskToManage);
// //     // Here you can open a modal or redirect to an edit page
// //   };

// //   return (
// //     <div className="w-full md:w-1/2 p-4">
// //       <h2 className="text-xl font-bold mb-4">Tasks</h2>
// //       {tasks.length === 0 ? (
// //         <p className="text-gray-500">No tasks yet.</p>
// //       ) : (
// //         <ul className="space-y-3">
// //           {tasks.map((task, index) => (
// //             <li
// //               key={index}
// //               className="p-3 border rounded-lg shadow-sm bg-gray-100 flex justify-between items-center"
// //             >
// //               <div>
// //                 <h3 className="font-semibold">{task.title}</h3>
// //                 <p className="text-gray-700">{task.description}</p>
// //               </div>

// //               {/* Action arrows */}
// //               <div className="flex gap-3">
// //                 {/* Manage arrow */}
// //                 <button
// //                   onClick={() => handleManage(index)}
// //                   className="text-blue-600 hover:text-blue-800"
// //                   title="Manage Task"
// //                 >
// //                   ➡️
// //                 </button>

// //                 {/* Delete arrow */}
// //                 <button
// //                   onClick={() => handleDelete(index)}
// //                   className="text-red-600 hover:text-red-800"
// //                   title="Delete Task"
// //                 >
// //                   ❌
// //                 </button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default Viewtasks;
// // -------------------------------------------------------------------------------------------------------------------------

// // import React, { useState } from "react";

// // const Viewtasks = ({ tasks = [], setTasks }) => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
// //   const [editTask, setEditTask] = useState({ title: "", description: "" });

// //   // Delete handler
// //   const handleDelete = (indexToRemove) => {
// //     const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
// //     setTasks(updatedTasks);
// //   };

// //   // Open edit modal
// //   const handleManage = (index) => {
// //     setCurrentTaskIndex(index);
// //     setEditTask(tasks[index]);
// //     setIsEditing(true);
// //   };

// //   // Handle input change inside modal
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditTask((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Save edited task
// //   const handleSave = () => {
// //     const updatedTasks = tasks.map((task, index) =>
// //       index === currentTaskIndex ? editTask : task,
// //     );
// //     setTasks(updatedTasks);
// //     setIsEditing(false);
// //     setCurrentTaskIndex(null);
// //   };

// //   return (
// //     <div className="h-screen w-full md:w-1/2 p-4">
// //       <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
// //         📋 My Tasks
// //       </h2>
// //       {tasks.length === 0 ? (
// //         <p className="text-gray-500">No tasks yet.</p>
// //       ) : (
// //         <ul className="space-y-3">
// //           {tasks.map((task, index) => (
// //             <li
// //               key={index}
// //               className="p-3 rounded-lg shadow-sm bg-gray-100
// //              flex justify-between items-start h-auto"
// //             >
// //               <div className="flex-1 p-2 h-auto max-h-40 overflow-y-auto hide-scrollbar">
// //                 <h3 className="font-semibold text-lg">{task.title}</h3>
// //                 <p className="text-gray-700 break-words whitespace-pre-line">
// //                   {task.description}
// //                 </p>
// //               </div>

// //               {/* Action arrows */}
// //               <div className="flex gap-3 ml-4">
// //                 <button
// //                   onClick={() => handleManage(index)}
// //                   className="text-blue-600 hover:text-blue-800 cursor-pointer"
// //                   title="Edit"
// //                 >
// //                   ✏️
// //                 </button>
// //                 <button
// //                   onClick={() => handleDelete(index)}
// //                   className="text-red-600 hover:text-red-800 cursor-pointer"
// //                   title="Delete Task"
// //                 >
// //                   🗑️
// //                 </button>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       {/* Edit Modal */}
// //       {isEditing && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //             <h3 className="text-lg font-bold mb-4 cursor-pointer">
// //               ✏️ Edit Task
// //             </h3>
// //             <input
// //               type="text"
// //               name="title"
// //               value={editTask.title}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded mb-3"
// //               placeholder="Edit Title"
// //             />
// //             <textarea
// //               name="description"
// //               value={editTask.description}
// //               onChange={handleChange}
// //               className="w-full p-2 border rounded-lg mb-3 mb-3 min-h-[150px] focus:ring-2 focus:ring-blue-400 outline-none"
// //               placeholder="Edit Description"
// //             />
// //             <div className="flex justify-end gap-3">
// //               <button
// //                 onClick={() => setIsEditing(false)}
// //                 className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer hover:bg-gray-600 transition"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSave}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
// //               >
// //                 Save
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Viewtasks;

// import { useState } from "react";
// import { FiEdit2, FiTrash2, FiFileText, FiSave } from "react-icons/fi";

// import { deleteNote, updateNote } from "./services/api";

// import Modal from "./component/ui/Modal";
// import ConfirmDialog from "./component/ui/ConfirmDialog";

// const Viewtasks = ({ tasks = [], refreshNotes }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);

//   const [currentNote, setCurrentNote] = useState(null);

//   const [editData, setEditData] = useState({
//     title: "",
//     description: "",
//   });

//   const openEditModal = (note) => {
//     setCurrentNote(note);

//     setEditData({
//       title: note.title,
//       description: note.description,
//     });

//     setIsEditing(true);
//   };

//   const handleChange = (e) => {
//     setEditData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const confirmDelete = (note) => {
//     setCurrentNote(note);
//     setShowDelete(true);
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteNote(currentNote._id);

//       setShowDelete(false);

//       refreshNotes?.();
//     } catch (error) {
//       alert(error.response?.data?.message || "Unable to delete note.");
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await updateNote(currentNote._id, editData);

//       setIsEditing(false);

//       refreshNotes?.();
//     } catch (error) {
//       alert(error.response?.data?.message || "Unable to update note.");
//     }
//   };

//   if (tasks.length === 0) {
//     return (
//       <div className="py-20 text-center">
//         <FiFileText size={50} className="mx-auto text-gray-300" />

//         <h2 className="mt-5 text-2xl font-semibold text-gray-700">
//           No Notes Yet
//         </h2>

//         <p className="mt-2 text-gray-500">
//           Click the + button to create your first note.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Notes Grid */}

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {tasks.map((note) => (
//           <div
//             key={note._id}
//             className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
//                 <FiFileText className="text-blue-600" size={24} />
//               </div>
//             </div>

//             <h2 className="mt-5 text-xl font-bold text-gray-800 line-clamp-2">
//               {note.title}
//             </h2>

//             <p className="mt-3 text-gray-500 leading-7 line-clamp-5">
//               {note.description}
//             </p>

//             <div className="mt-8 flex gap-3">
//               <button
//                 onClick={() => openEditModal(note)}
//                 className="flex-1 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700"
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <FiEdit2 />
//                   Edit
//                 </div>
//               </button>

//               <button
//                 onClick={() => confirmDelete(note)}
//                 className="flex-1 rounded-xl bg-red-600 py-3 text-white transition hover:bg-red-700"
//               >
//                 <div className="flex items-center justify-center gap-2">
//                   <FiTrash2 />
//                   Delete
//                 </div>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}

//       {isEditing && (
//         <Modal title="Edit Note" onClose={() => setIsEditing(false)}>
//           <div className="space-y-6">
//             <div>
//               <label className="mb-2 block text-sm font-semibold text-gray-700">
//                 Title
//               </label>

//               <input
//                 name="title"
//                 value={editData.title}
//                 onChange={handleChange}
//                 className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none focus:border-blue-600 focus:bg-white"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-semibold text-gray-700">
//                 Description
//               </label>

//               <textarea
//                 rows="8"
//                 name="description"
//                 value={editData.description}
//                 onChange={handleChange}
//                 className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none focus:border-blue-600 focus:bg-white"
//               />
//             </div>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleUpdate}
//                 className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
//               >
//                 <div className="flex items-center gap-2">
//                   <FiSave />
//                   Save Changes
//                 </div>
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* Delete Dialog */}

//       <ConfirmDialog
//         open={showDelete}
//         title="Delete Note"
//         message="This action cannot be undone. Are you sure you want to delete this note?"
//         confirmText="Delete"
//         cancelText="Cancel"
//         confirmColor="red"
//         onCancel={() => setShowDelete(false)}
//         onConfirm={handleDelete}
//       />
//     </>
//   );
// };

// export default Viewtasks;

import { useState } from "react";
import { FiEdit2, FiTrash2, FiFileText, FiSave } from "react-icons/fi";

import { deleteNote, updateNote } from "./services/api";

import Modal from "./component/ui/Modal";
import ConfirmDialog from "./component/ui/ConfirmDialog";

const Viewtasks = ({ tasks = [], refreshNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [currentNote, setCurrentNote] = useState(null);

  const [editData, setEditData] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const openEditModal = (note) => {
    setCurrentNote(note);

    setEditData({
      title: note.title,
      description: note.description,
    });

    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const confirmDelete = (note) => {
    setCurrentNote(note);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);

      await deleteNote(currentNote._id);

      setShowDelete(false);
      setCurrentNote(null);

      if (refreshNotes) {
        await refreshNotes();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Unable to delete note.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!editData.title.trim() || !editData.description.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await updateNote(currentNote._id, editData);

      setIsEditing(false);
      setCurrentNote(null);

      if (refreshNotes) {
        await refreshNotes();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Unable to update note.");
    } finally {
      setLoading(false);
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="py-20 text-center">
        <FiFileText size={50} className="mx-auto text-gray-300" />

        <h2 className="mt-5 text-2xl font-semibold text-gray-700">
          No Notes Yet
        </h2>

        <p className="mt-2 text-gray-500">
          Click the + button to create your first note.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Notes Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((note) => (
          <div
            key={note._id}
            className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <FiFileText className="text-blue-600" size={24} />
              </div>
            </div>

            <h2 className="mt-5 line-clamp-2 text-xl font-bold text-gray-800">
              {note.title}
            </h2>

            <p className="mt-3 line-clamp-5 leading-7 text-gray-500">
              {note.description}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => openEditModal(note)}
                className="flex-1 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700"
              >
                <div className="flex items-center justify-center gap-2">
                  <FiEdit2 />
                  Edit
                </div>
              </button>

              <button
                onClick={() => confirmDelete(note)}
                className="flex-1 rounded-xl bg-red-600 py-3 text-white transition hover:bg-red-700"
              >
                <div className="flex items-center justify-center gap-2">
                  <FiTrash2 />
                  Delete
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}

      {isEditing && (
        <Modal
          title="Edit Note"
          onClose={() => {
            setIsEditing(false);
            setCurrentNote(null);
          }}
        >
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Description
              </label>

              <textarea
                rows="8"
                name="description"
                value={editData.description}
                onChange={handleChange}
                className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCurrentNote(null);
                }}
                className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                disabled={loading}
                className="rounded-xl bg-green-600 px-6 py-3 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <div className="flex items-center gap-2">
                  <FiSave />

                  {loading ? "Saving..." : "Save Changes"}
                </div>
              </button>
            </div>
          </div>
        </Modal>
      )}
      {/* Delete Confirmation Dialog */}

      <ConfirmDialog
        open={showDelete}
        title="Delete Note"
        message="This action cannot be undone. Are you sure you want to delete this note?"
        confirmText={loading ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        confirmColor="red"
        onCancel={() => {
          if (!loading) {
            setShowDelete(false);
            setCurrentNote(null);
          }
        }}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default Viewtasks;