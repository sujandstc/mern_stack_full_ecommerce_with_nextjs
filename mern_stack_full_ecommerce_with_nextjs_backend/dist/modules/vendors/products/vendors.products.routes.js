"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addProduct_1 = __importDefault(require("./controllers/addProduct"));
const vendorAuth_1 = __importDefault(require("../../../handlers/vendorAuth"));
const editProduct_1 = __importDefault(require("./controllers/editProduct"));
const deleteProduct_1 = __importDefault(require("./controllers/deleteProduct"));
const getProducts_1 = __importDefault(require("./controllers/getProducts"));
const VendorsProductRoute = (0, express_1.Router)();
VendorsProductRoute.use(vendorAuth_1.default);
VendorsProductRoute.get("/", getProducts_1.default);
VendorsProductRoute.post("/", addProduct_1.default);
VendorsProductRoute.patch("/", editProduct_1.default);
VendorsProductRoute.delete("/:product_id", deleteProduct_1.default);
// VendorsProductRoute.post("/login", vendorsLogin);
exports.default = VendorsProductRoute;
