// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Taskwriting from "../../Taskwriting";
// import Viewtasks from "../../Viewtasks";
// import Navsection from "../Navsection";

// import { getNotes } from "../../services/api";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const fetchNotes = async () => {
//     try {
//       setLoading(true);

//       const response = await getNotes();

//       setTasks(response.data.notes || []);
//     } catch (error) {
//       console.error(error);

//       if (error.response?.status === 401) {
//         localStorage.removeItem("token");
//         localStorage.removeItem("user");

//         navigate("/login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navsection />

//       <div className="max-w-7xl mx-auto p-5">
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>

//           <p className="text-gray-600">Manage all your notes here.</p>
//         </div>

//         {loading ? (
//           <div className="text-center text-lg">Loading Notes...</div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-6">
//             <Taskwriting
//               tasks={tasks}
//               setTasks={setTasks}
//               refreshNotes={fetchNotes}
//             />

//             <Viewtasks
//               tasks={tasks}
//               setTasks={setTasks}
//               refreshNotes={fetchNotes}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useMemo, useState } from "react";
import { FiBookOpen, FiClock, FiEdit3, FiArrowRight } from "react-icons/fi";

import DashboardLayout from "../layout/DashboardLayout";
import Loader from "../ui/Loader";
import { getNotes } from "../../services/api";

const Dashboard = ({ user, onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await getNotes();

      setNotes(res.data.notes || []);
    } catch (err) {
      console.error("Error fetching notes:",err);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const recentNotes = useMemo(() => {
    return [...notes].slice(0, 5);
  }, [notes]);

  return (
    <DashboardLayout user={user} onLogout={onLogout}>
      {loading ? (
        <Loader text="Loading dashboard..." />
      ) : (
        <div className="space-y-8">
          {/* Welcome */}

          <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 shadow-xl">
            <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

            <p className="mt-3 text-blue-100 max-w-2xl">
              Organize your ideas, manage your notes, and keep everything in one
              place.
            </p>
          </section>

          {/* Statistics */}

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Notes</p>

                  <h2 className="mt-3 text-4xl font-bold text-gray-800">
                    {notes.length}
                  </h2>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FiBookOpen className="text-blue-600" size={28} />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Recent Notes</p>

                  <h2 className="mt-3 text-4xl font-bold text-gray-800">
                    {recentNotes.length}
                  </h2>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
                  <FiEdit3 className="text-green-600" size={28} />
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Status</p>

                  <h2 className="mt-3 text-xl font-semibold text-green-600">
                    Active
                  </h2>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <FiClock className="text-yellow-600" size={28} />
                </div>
              </div>
            </div>
          </section>

          {/* Recent Notes */}

          <section className="rounded-3xl bg-white shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Notes
              </h2>
            </div>

            {recentNotes.length === 0 ? (
              <div className="py-16 text-center">
                <FiBookOpen size={45} className="mx-auto text-gray-300" />

                <h3 className="mt-5 text-xl font-semibold text-gray-700">
                  No Notes Yet
                </h3>

                <p className="mt-2 text-gray-500">
                  Create your first note from the My Notes page.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {recentNotes.map((note) => (
                  <div
                    key={note._id}
                    className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {note.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {note.description}
                      </p>
                    </div>

                    <FiArrowRight className="text-gray-400" size={20} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;