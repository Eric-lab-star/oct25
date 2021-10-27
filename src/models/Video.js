import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  title: { type: String, max: 20 },
  createdAt: { type: Date, default: new Date() },
});

const Video = mongoose.model("Video", VideoSchema);

export default Video;
