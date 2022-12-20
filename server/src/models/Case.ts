import mongoose from "mongoose";
import bcrypt from "bcryptjs";

interface ICase {
  email: string;
  name: string;
  password: string;
}

const caseSchema = new mongoose.Schema<ICase>({});
