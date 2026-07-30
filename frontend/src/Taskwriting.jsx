// // import React, { useState } from "react";

// // const Taskwriting = ({ tasks, setTasks }) => {
// //   const [task, setTask] = useState({ title: "", description: "" });
// //   const [error, setError] = useState(""); // state for error message
// //   const [success, setSuccess] = useState(""); // state for success message

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setTask((prevTask) => ({ ...prevTask, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (task.title.trim() && task.description.trim()) {
// //       setTasks([...tasks, task]); // add new task to shared state
// //       setTask({ title: "", description: "" }); // reset form
// //       setError(""); // clear error if successful
// //       setSuccess("✅ Task added successfully!");
// //       // Clear success message after 3 seconds
// //       setTimeout(() => setSuccess(""), 3000);
// //     } else {
// //       setError("⚠️ Please enter both Title and Description before adding a task.");
// //     }
// //   };

// //   return (
// //     <div className="md:min-h-[85vh] md:max-h-[95vh] w-full flex flex-col items-baseline md:p-5 p-2">
// //       <form onSubmit={handleSubmit} className="flex flex-col h-full w-full md:p-3 p-4 gap-3">
// //         <input
// //           className="outline-none md:px-7 p-3 md:text-2xl text-xl"
// //           type="text"
// //           id="title"
// //           name="title"
// //           value={task.title}
// //           onChange={handleChange}
// //           placeholder="Title:"
// //         />
// //         <div className="h-1 w-4/5 rounded-2xl flex self-center bg-gray-300"></div>
// //         <textarea
// //           className="outline-none min-h-80 max-h-96 md:p-7 p-3 md:text-lg text-lg"
// //           id="description"
// //           name="description"
// //           value={task.description}
// //           onChange={handleChange}
// //           placeholder="Description:"
// //         />

// //         <button
// //           type="submit"
// //           className="text-white rounded-lg border border-transparent md:px-[20px] md:py-[10px] px-[0.8em] py-[0.6em] text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-200 hover:bg-[#646cff] self-center"
// //         >
// //           Add Task
// //         </button>
// //       </form>
// //       {/* Error message */}
// //       {error && (
// //         <p className="text-red-600 font-medium mt-3 self-center">{error}</p>
// //       )}
// //       {/* Success message */}
// //       {success &&(
// //         <p className="text-green-600 font-medium mt-3 self-center">{success}</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Taskwriting;

// import { useState } from "react";
// import { createNote } from "./services/api";

// const Taskwriting = ({ refreshNotes }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage("");

//     if (!formData.title.trim() || !formData.description.trim()) {
//       setMessage("Please fill all fields.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await createNote(formData);

//       setMessage(response.data.message);

//       setFormData({
//         title: "",
//         description: "",
//       });

//       // Refresh Dashboard Notes
//       refreshNotes();
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Unable to create note.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg p-5">
//       <h2 className="text-2xl font-semibold mb-4">✏️ Create Note</h2>

//       {message && (
//         <div
//           className={`mb-4 p-3 rounded ${
//             message === "Note Created Successfully"
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Title</label>

//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter Title"
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Description</label>

//           <textarea
//             rows="6"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Write your note..."
//             className="w-full border rounded p-2"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
//         >
//           {loading ? "creating..." : "Create"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Taskwriting;

import { useState } from "react";
import { FiFileText, FiAlignLeft, FiPlus } from "react-icons/fi";
import { createNote } from "./services/api";

const Taskwriting = ({ refreshNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setMessage("");

  //   if (!formData.title.trim() || !formData.description.trim()) {
  //     setMessage("Please fill all fields.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const response = await createNote(formData);

  //     setMessage(response.data.message);

  //     setFormData({
  //       title: "",
  //       description: "",
  //     });

  //     refreshNotes?.();
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || "Unable to create note.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  setMessage("");

  if (!formData.title.trim() || !formData.description.trim()) {
    setMessage("Please fill all fields.");
    return;
  }

  try {
    setLoading(true);

    const response = await createNote(formData);
    // Show whatever backend sends
    setMessage(response.data.message || "Note Created Successfully");

    // Clear form
    setFormData({
      title: "",
      description: "",
    });

    // Refresh notes
    if (typeof refreshNotes === "function") {
      await refreshNotes();
    }

  } catch (error) {
    setMessage(
      error.response?.data?.message ||
      "Unable to create note."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div>
      {/* Heading */}

      <div className="mb-8">
        {/* <h2 className="text-3xl font-bold text-gray-800">Create New Note</h2> */}

        <p className="mt-2 text-gray-500">Capture your thoughts and ideas.</p>
      </div>

      {/* Alert */}

      {message && (
        <div
          className={`mb-6 rounded-2xl border px-5 py-4 text-sm font-medium ${
            message === "Note Created Successfully"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Form */}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FiFileText />
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Example: React Interview Notes"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FiAlignLeft />
            Description
          </label>

          <textarea
            rows="8"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write your note here..."
            className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData({
                title: "",
                description: "",
              })
            }
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Clear
          </button>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-medium text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Creating...
              </>
            ) : (
              <>
                <FiPlus />
                Create Note
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Taskwriting;