import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.model("users", usersSchema);

export default usersModel;
