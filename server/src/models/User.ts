import mongoose, { Model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email: string;
  name: string;
  password: string;
}

interface IUserMethods {
  isCorrectPassword: (
    providedPassword: string,
    actualPassword: string
  ) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser, {}, IUserMethods>({
  email: {
    type: String,
    required: [true, "The email is missing."],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "The name is missing."],
  },
  password: {
    type: String,
    required: [true, "The password is missing."],
    select: false,
  },
});

// Hash password before saving the doc
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 14);
  this.password = hashedPassword;
  next();
});

// Password checking
userSchema.methods.isCorrectPassword = async function (
  providedPassword: string,
  actualPassword: string
) {
  return await bcrypt.compare(providedPassword, actualPassword);
};

type UserModel = Model<IUser, {}, IUserMethods>;

export default mongoose.model<IUser, UserModel>("User", userSchema);
