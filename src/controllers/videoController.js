import Video from "../models/Video";
export const home = async (req, res) => {
  const videos = await Video.find().sort({ createdAt: "desc" });
  res.render("home", { pageTitle: "Home", videos });
  console.log(videos);
  return;
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
  return;
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title } = req.body;
  await Video.create({
    title,
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
