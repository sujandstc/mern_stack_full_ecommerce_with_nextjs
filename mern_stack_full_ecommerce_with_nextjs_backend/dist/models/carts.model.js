"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cartsSchema = new mongoose_1.default.Schema({
    product_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "products",
    },
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const cartsModel = mongoose_1.default.model("carts", cartsSchema);
exports.default = cartsModel;
