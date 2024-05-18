"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productsSchema = new mongoose_1.default.Schema({
    vendor_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
    is_top_product: {
        type: Boolean,
    },
}, {
    timestamps: true,
});
const productsModel = mongoose_1.default.model("products", productsSchema);
exports.default = productsModel;
