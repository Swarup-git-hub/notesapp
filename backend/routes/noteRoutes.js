// import express from "express";

// import protect from "../middleware/authMiddleware.js";

// import {
//   createNote,
// } from "../controllers/Notes.js";

// const router = express.Router();

// router.post(
//   "/",
//   protect,
//   createNote
// );

// export default router;


import express from "express";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/*
=====================================
Protected Notes Routes
=====================================
*/

// Get All Notes
router.get("/", authMiddleware, getNotes);

// Create Note
router.post("/", authMiddleware, createNote);

// Update Note
router.put("/:id", authMiddleware, updateNote);

// Delete Note
router.delete("/:id", authMiddleware, deleteNote);

export default router;