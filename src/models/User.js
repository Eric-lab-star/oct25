import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  name: { type: String },
  password: { type: String },
  email: { type: String, unique: true },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 6);
});
const User = mongoose.model("User", userSchema);

export default User;
