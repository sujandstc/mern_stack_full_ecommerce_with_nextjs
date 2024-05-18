"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendorsSignup_1 = __importDefault(require("./controllers/vendorsSignup"));
const vendorsLogin_1 = __importDefault(require("./controllers/vendorsLogin"));
const VendorsAuthRoute = (0, express_1.Router)();
VendorsAuthRoute.post("/signup", vendorsSignup_1.default);
VendorsAuthRoute.post("/login", vendorsLogin_1.default);
exports.default = VendorsAuthRoute;
