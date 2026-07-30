// // import Taskwriting from "../../Taskwriting";
// // import Viewtasks from "../../Viewtasks";
// // import { useEffect, useState } from "react";
// // import { getNotes } from "../../services/api";
// // import DashboardLayout from "../layout/DashboardLayout";

// // const MyNotes = () => {
// //   const [tasks, setTasks] = useState([]);

// //   const fetchNotes = async () => {
// //     try {
// //       const response = await getNotes();
// //       setTasks(response.data.notes);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchNotes();
// //   }, []);

// //   return (
// //     <DashboardLayout>

// //       <h1 className="text-3xl font-bold mb-6">
// //         My Notes
// //       </h1>

// //       <Taskwriting
// //         refreshNotes={fetchNotes}
// //       />

// //       <div className="mt-8">

// //         <Viewtasks
// //           tasks={tasks}
// //           refreshNotes={fetchNotes}
// //         />

// //       </div>

// //     </DashboardLayout>
// //   );
// // };

// // export default MyNotes;

// import { useEffect, useState } from "react";
// import { FiPlus } from "react-icons/fi";

// import DashboardLayout from "../layout/DashboardLayout";
// import Modal from "../ui/Modal";

// import Taskwriting from "../../Taskwriting";
// import Viewtasks from "../../Viewtasks";

// import { getNotes } from "../../services/api";

// const MyNotes = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   const fetchNotes = async () => {
//     try {
//       setLoading(true);

//       const response = await getNotes();

//       setTasks(response.data.notes || []);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   return (
//     <DashboardLayout>
//       {/* Header */}

//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-800">My Notes</h1>

//           <p className="text-gray-500 mt-1">View and manage all your notes.</p>
//         </div>
//       </div>

//       {/* Notes */}

//       <div className="bg-white rounded-xl p-6">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-2xl font-semibold">Notes List</h2>
//           <span className="text-gray-500">{tasks.length} Note(s)</span>
//         </div>

//         {loading ? (
//           <div className="text-center py-10">Loading notes...</div>
//         ) : (
//           <Viewtasks tasks={tasks} refreshNotes={fetchNotes} />
//         )}
//       </div>

//       {/* Floating Action Button */}

//       <button
//         onClick={() => setShowModal(true)}
//         className="
//           fixed
//           bottom-8
//           right-8
//           w-16
//           h-16
//           rounded-full
//           bg-blue-600
//           hover:bg-blue-700
//           text-white
//           shadow-xl
//           flex
//           items-center
//           justify-center
//           transition-all
//           duration-300
//           hover:scale-110
//           z-40
//         "
//       >
//         <FiPlus size={30} />
//       </button>

//       {/* Popup */}

//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <Taskwriting
//             refreshNotes={() => {
//               fetchNotes();
//               setShowModal(false);
//             }}
//           />
//         </Modal>
//       )}
//     </DashboardLayout>
//   );
// };

// export default MyNotes;

import { useEffect, useState } from "react";
import { FiPlus, FiFileText } from "react-icons/fi";

import DashboardLayout from "../layout/DashboardLayout";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";

import Taskwriting from "../../Taskwriting";
import Viewtasks from "../../Viewtasks";

import { getNotes } from "../../services/api";

const MyNotes = ({ user, onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchNotes = async () => {
    try {
      const res = await getNotes();

      setNotes(res.data.notes || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <DashboardLayout user={user} onLogout={onLogout}>
      <div className="space-y-8">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            {/* <h1 className="text-3xl font-bold text-gray-800">My Notes</h1> */}

            <p className="mt-2 text-gray-500">
              View, organize and manage all your notes.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-5 py-3">
              <FiFileText className="text-blue-600" />

              <span className="font-semibold text-blue-700">
                {notes.length} Notes
              </span>
            </div>
          </div>
        </div>

        {/* Notes Section */}

        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm">
          <div className="border-b border-gray-100 px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Notes Library
            </h2>
          </div>

          <div className="p-6">
            {loading ? (
              <Loader text="Loading Notes..." />
            ) : notes.length === 0 ? (
              <div className="py-20 text-center">
                <FiFileText size={50} className="mx-auto text-gray-300" />

                <h2 className="mt-6 text-2xl font-semibold text-gray-700">
                  No Notes Yet
                </h2>

                <p className="mt-2 text-gray-500">
                  Click the + button to create your first note.
                </p>
              </div>
            ) : (
              <Viewtasks tasks={notes}
              refreshNotes={fetchNotes} />
            )}
          </div>
        </div>

        {/* Floating Button */}

        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-blue-600 text-white shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center z-40"
        >
          <FiPlus size={28} />
        </button>

        {/* Create Modal */}

        {showModal && (
          <Modal title="Create New Note" onClose={() => setShowModal(false)}>
            <Taskwriting
              refreshNotes={async () => {
                await fetchNotes();
                setShowModal(false);
              }}
            />
          </Modal>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyNotes;