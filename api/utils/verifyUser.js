import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.access_token;  // Make sure the token is sent in cookies
  if (!token) return next(errorHandler(401, "Unauthorized "));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Forbidden "));
    req.user = user; // Assign the user from the decoded token to the request object
    next();
  });
};
