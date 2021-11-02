import Video from "../models/Video";
import User from "../models/User";
export const home = async (req, res) => {
  const videos = await Video.find().sort({ createdAt: "desc" });
  res.render("home", { pageTitle: "Home", videos });
  return;
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("user");
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
  return;
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { user } = req.session;
  const { title } = req.body;
  await Video.create({
    title,
    user: user._id,
  });

  res.redirect("/");

  return;
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;

  await Video.findByIdAndDelete(id);
  res.redirect("/");
  return;
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  res.render("edit", { pageTitle: "Edit Your Video", video });
  return;
};

export const postEdit = async (req, res) => {
  const {
    body: { title },
    params: { id },
  } = req;

  await Video.findByIdAndUpdate(id, {
    title,
  });
  res.redirect("/");
  return;
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  const videos = await Video.find({
    title: { $regex: `^${keyword}` },
  });
  res.render("search", { pageTitle: "Search", videos });
};
