"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendorAuth_1 = __importDefault(require("../../../handlers/vendorAuth"));
const getVendorOrders_1 = __importDefault(require("./controllers/getVendorOrders"));
const VendorOrderRoute = (0, express_1.Router)();
VendorOrderRoute.use(vendorAuth_1.default);
VendorOrderRoute.get("/", getVendorOrders_1.default);
exports.default = VendorOrderRoute;
