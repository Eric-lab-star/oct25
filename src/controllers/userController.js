import User from "../models/User";
import Video from "../models/Video";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { username, name, password, email, password2 } = req.body;

  if (password !== password2) {
    res.render("join", {
      pageTitle: "Join",
      errorMessage: "Password does not match",
    });
    return;
  }

  const exists = await User.exists({
    $or: [{ email }, { name }, { username }],
  });
  if (exists) {
    res.render("join", {
      pageTitle: "Join",
      errorMessage: "Username or email or name exists",
    });
    return;
  }
  await User.create({
    username,
    name,
    password,
    email,
  });
  return res.redirect("/login");
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
  return;
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    res.render("login", {
      pageTitle: "Login",
      errorMessage: "This user does not exists",
    });
    return;
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    res.render("login", {
      pageTitle: "Login",
      errorMessage: "Password confirmation failed",
    });
    return;
  }
  req.session.loggedIn = true;
  req.session.user = user;
  res.redirect("/");
  return;
};

export const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
  return;
};

export const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("videos");
  const videos = user.videos;
  console.log(videos);
  res.render("profile", { pageTitle: "Profile", user, videos });
  return;
};

export const getEdit = (req, res) => {
  res.render("editProfile", { pageTitle: `Edit Profile` });
  return;
};

export const postEdit = async (req, res) => {
  const { username, email, name } = req.body;
  const { id } = req.params;
  const updateuser = await User.findByIdAndUpdate(
    id,
    {
      username,
      email,
      name,
    },
    { new: true }
  );
  req.session.user = updateuser;
  res.redirect("profile");
  return;
};
