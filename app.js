import "dotenv/config";
import "./db";
import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import globalRouter from "./src/routers/globalRouter";
import videoRouter from "./src/routers/videoRouter";
import userRouter from "./src/routers/userRouter";
import { localsMiddleware } from "./middlewares";
const app = express();
const PORT = 4000;

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log(`server listening http://localhost:${PORT}`);
});
