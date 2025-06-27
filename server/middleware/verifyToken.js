import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';
// console.log(JWT_SECRET)
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // "Bearer <token>"
// console.log(token)
  if (!token) return res.status(401).json({ message: 'No token provided' });
  // console.log("decoded    "+jwt.verify(token, JWT_SECRET))
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // contains email
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default verifyToken;
