import express from "express";
import { login } from "../controllers/userController";
import { home } from "../controllers/videoController";
const globalRouter = express.Router();
globalRouter.get("/", home);
globalRouter.get("/login", login);
export default globalRouter;
