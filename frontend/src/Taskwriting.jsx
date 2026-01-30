// import React from "react";
// import Viewtasks from "./Viewtasks";

// const Taskwriting = () => {
//   const [task, setTask] = React.useState({ title: "", description: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask((prevTask) => ({ ...prevTask, [name]: value }));
//   };
//   return (
//     <div className="md:min-h-[85vh] md:max-h-[95vh] w-full flex items-baseline md:p-5 p-2">
//       <form className=" flex flex-col h-full w-full md:p-3 p-4 gap-3">
//         <input
//           className="outline-none md:px-7 p-3 md:text-2xl text-xl"
//           type="text"
//           id="title"
//           name="Title"
//           placeholder="Title:"
//         />
//         <div className=" h-1 w-4/5 rounded-2xl flex self-center bg-gray-300"></div>
//         <textarea
//           className=" outline-none min-h-80 max-h-96 md:p-7 p-3 md:text-lg text-lg"
//           type="text"
//           id="task"
//           name="task"
//           placeholder="New Task:"
//         />
//         <button
//           type="submit"
//           className="text-white rounded-lg border border-transparent md:px-[20px] md:py-[10px] px-[0.8em] py-[0.6em] text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-200 hover:bg-[#646cff] self-center"
//         >
//           Add Task
//         </button>
//       </form>
//       <Viewtasks task={task}/>
//     </div>
//   );
// };

// export default Taskwriting;






import React, { useState } from "react";

const Taskwriting = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({ title: "", description: "" });
  const [error, setError] = useState(""); // state for error message
  const [success, setSuccess] = useState(""); // state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() && task.description.trim()) {
      setTasks([...tasks, task]); // add new task to shared state
      setTask({ title: "", description: "" }); // reset form
      setError(""); // clear error if successful
      setSuccess("✅ Task added successfully!");
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setError("⚠️ Please enter both Title and Description before adding a task.");
    }
  };

  return (
    <div className="md:min-h-[85vh] md:max-h-[95vh] w-full flex flex-col items-baseline md:p-5 p-2">
      <form onSubmit={handleSubmit} className="flex flex-col h-full w-full md:p-3 p-4 gap-3">
        <input
          className="outline-none md:px-7 p-3 md:text-2xl text-xl"
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title:"
        />
        <div className="h-1 w-4/5 rounded-2xl flex self-center bg-gray-300"></div>
        <textarea
          className="outline-none min-h-80 max-h-96 md:p-7 p-3 md:text-lg text-lg"
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="New Task:"
        />
      
        <button
          type="submit"
          className="text-white rounded-lg border border-transparent md:px-[20px] md:py-[10px] px-[0.8em] py-[0.6em] text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-200 hover:bg-[#646cff] self-center"
        >
          Add Task
        </button>
      </form>
      {/* Error message */}
      {error && (
        <p className="text-red-600 font-medium mt-3 self-center">{error}</p>
      )}
      {/* Success message */}
      {success &&(
        <p className="text-green-600 font-medium mt-3 self-center">{success}</p>
      )}
    </div>
  );
};

export default Taskwriting;