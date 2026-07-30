import axios from "axios";

// Backend Base URL
const API = axios.create({
    baseURL: "https://notes-app-backend-1j2p.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Automatically attach JWT token to every request
// API.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem("token");
//             localStorage.removeItem("user");

//             if (
//                 window.location.pathname !== "/login" &&
//                 window.location.pathname !== "/register"
//             ) {
//                 window.location.href = "/login";
//             }
//         }

//         return Promise.reject(error);
//     }
// );
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);
//   Authentication APIs

// Register User
export const registerUser = (userData) =>
    API.post("/auth/register", userData);

// Login User
export const loginUser = (loginData) =>
    API.post("/auth/login", loginData);

//  Notes APIs

// Get All Notes
export const getNotes = () =>
    API.get("/notes");

// Create Note
export const createNote = (noteData) =>
    API.post("/notes", noteData);

// Update Note
export const updateNote = (id, noteData) =>
    API.put(`/notes/${id}`, noteData);

// Delete Note
export const deleteNote = (id) =>
    API.delete(`/notes/${id}`);

export default API;