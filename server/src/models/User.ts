import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  email: string;
  name: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: [true, "The email is missing."],
  },
  name: {
    type: String,
    required: [true, "The name is missing."],
  },
  password: {
    type: String,
    required: [true, "The password is missing."],
  },
});

// Hash password before saving the doc
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
});

export default mongoose.model<IUser>("User", userSchema);
