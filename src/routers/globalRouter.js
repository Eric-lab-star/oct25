import express from "express";
import {
  getLogin,
  getJoin,
  postJoin,
  postLogin,
  logout,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
const globalRouter = express.Router();
globalRouter.get("/", home);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/search", search);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/logout", logout);

export default globalRouter;
