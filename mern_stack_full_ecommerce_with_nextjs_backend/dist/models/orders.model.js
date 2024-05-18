"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ordersSchema = new mongoose_1.default.Schema({
    product_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "products",
    },
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    vendor_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "vendors",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "order_placed",
        required: true,
        enum: ["order_placed", "cancelled", "delivered", "pending"],
    },
}, {
    timestamps: true,
});
const ordersModel = mongoose_1.default.model("orders", ordersSchema);
exports.default = ordersModel;
