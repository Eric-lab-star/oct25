import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VideoSchema = new mongoose.Schema({
  title: { type: String, max: 20 },
  createdAt: { type: Date, default: new Date() },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  fileUrl: { type: String, required: true },
});

const Video = mongoose.model("Video", VideoSchema);

export default Video;
