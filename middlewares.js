import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.user = req.session.user;
  next();
};

export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fieldSize: 3000000,
  },
});

export const videoUpload = multer({
  dest: "uploads/videos/",
  limits: {
    fieldSize: 10000000,
  },
});
