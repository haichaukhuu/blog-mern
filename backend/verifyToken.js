const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get token from request headers, cookies, or query parameters
  const token = req.header('Authorization')?.split(' ')[1] || req.cookies?.jwtToken;

  if (!token) {
    return res.status(403).json({ error: "Access denied: No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user information to the request
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = verifyToken;
