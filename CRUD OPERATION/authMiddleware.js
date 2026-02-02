const authMiddleware = (req, res, next) => {
  const { token } = req.query;

  if (token !== "admin123") {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  next();
};

export default authMiddleware;
