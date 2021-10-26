import "./db";
import express from "express";
import globalRouter from "./src/routers/globalRouter";
import videoRouter from "./src/routers/videoRouter";
import userRouter from "./src/routers/userRouter";
const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log(`server listening http://localhost:${PORT}`);
});
