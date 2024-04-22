import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    vendor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vendors",
    },

    product_name: {
      type: String,
      required: true,
    },

    product_price: {
      type: Number,
      required: true,
    },

    product_image: {
      type: String,
    },

    product_description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;
