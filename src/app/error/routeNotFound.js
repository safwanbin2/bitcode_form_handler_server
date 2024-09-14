const routeNotFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found!",
  });
};

export default routeNotFound;
