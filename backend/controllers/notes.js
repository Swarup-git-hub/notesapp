// import Note from "../models/Note.js";

// export const createNote = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       title,
//       description,
//     } = req.body;

//     if (!title) {
//       return res.status(400).json({
//         message: "Title is required",
//       });
//     }

//     const note = await Note.create({
//       title,
//       description,
//       user: req.user._id,
//     });

//     res.status(201).json(note);

//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };




import Note from "../models/Note.js";

/*
========================================
Create Note
POST /api/notes
========================================
*/

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and Description are required",
      });
    }

    const note = await Note.create({
      title,
      description,
      user: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Note Created Successfully",
      note,
    });

  } catch (error) {
    console.error("Create Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/*
========================================
Get All Notes
GET /api/notes
========================================
*/

export const getNotes = async (req, res) => {
  try {

    const notes = await Note.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });

  } catch (error) {

    console.error("Get Notes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

/*
========================================
Update Note
PUT /api/notes/:id
========================================
*/

export const updateNote = async (req, res) => {
  try {

    const { id } = req.params;

    const { title, description } = req.body;

    const note = await Note.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note Not Found",
      });
    }

    note.title = title || note.title;
    note.description = description || note.description;

    await note.save();

    return res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      note,
    });

  } catch (error) {

    console.error("Update Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};

/*
========================================
Delete Note
DELETE /api/notes/:id
========================================
*/

export const deleteNote = async (req, res) => {
  try {

    const { id } = req.params;

    const note = await Note.findOne({
      _id: id,
      user: req.user._id,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note Not Found",
      });
    }

    await note.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
    });

  } catch (error) {

    console.error("Delete Note Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};