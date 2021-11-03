import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: { type: String, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 6);
  }
});
const User = mongoose.model("User", userSchema);

export default User;
