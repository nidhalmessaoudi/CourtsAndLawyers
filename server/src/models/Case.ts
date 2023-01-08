import mongoose from "mongoose";

interface ICase {
  firstParty: string;
  secondParty: string;
  caseNumber: string;
  courtAddress: string;
  judge: string;
  registrar: string;
  startDate: Date;
  user: mongoose.Types.ObjectId;
  description?: string;
}

const caseSchema = new mongoose.Schema<ICase>({
  firstParty: {
    type: String,
    required: [true, "The first party is missing."],
  },
  secondParty: {
    type: String,
    required: [true, "The second party is missing."],
  },
  caseNumber: {
    type: String,
    required: [true, "The case number is missing."],
  },
  courtAddress: {
    type: String,
    required: [true, "The court address is missing."],
  },
  judge: {
    type: String,
    required: [true, "The judge is missing."],
  },
  registrar: {
    type: String,
    required: [true, "The registrar is missing."],
  },
  startDate: {
    type: Date,
    required: [true, "The start date is missing."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  description: String,
});

caseSchema.pre(/^find/, function (next) {
  this.populate("user");
  next();
});

export default mongoose.model<ICase>("Case", caseSchema);
