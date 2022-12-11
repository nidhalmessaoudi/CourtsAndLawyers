import mongoose from "mongoose";

interface IUser {
  email: string;
  name: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: [true, "A user must have an email!"],
  },
  name: {
    type: String,
    required: [true, "A user must have a name!"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password!"],
  },
});

export default mongoose.model<IUser>("User", userSchema);
