"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const vendorsSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
const vendorModel = mongoose_1.default.model("vendors", vendorsSchema);
exports.default = vendorModel;
