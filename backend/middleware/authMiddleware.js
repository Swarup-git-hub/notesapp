// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// const protect = async (req, res, next) => {
//   try {
//     let token;

//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];

//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET
//       );

//       req.user = await User.findById(
//         decoded.id
//       ).select("-password");

//       next();
//     } else {
//       return res.status(401).json({
//         message: "No token provided",
//       });
//     }
//   } catch (error) {
//     return res.status(401).json({
//       message: "Invalid token",
//     });
//   }
// };

// export default protect;



import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User Not Found",
      });
    }

    // Attach user to request
    req.user = user;

    next();

  } catch (error) {
    console.error("JWT Error:", error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;