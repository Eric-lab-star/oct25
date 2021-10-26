import express from "express";
import {
  deleteVideo,
  getUpload,
  postUpload,
  watch,
} from "../controllers/videoController";
import Video from "../models/Video";
const videoRouter = express.Router();
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);
export default videoRouter;
