import mongoose from "mongoose";

const vendorsSchema = new mongoose.Schema(
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

    business_name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const vendorModel = mongoose.model("vendors", vendorsSchema);

export default vendorModel;
