import express from "express";
import { getEdit, postEdit } from "../controllers/userController";
const userRouter = express.Router();
userRouter.route("/:id([0-9a-f]{24})/profile").get(getEdit).post(postEdit);
export default userRouter;
