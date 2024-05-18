"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUserProfile_1 = __importDefault(require("./controllers/getUserProfile"));
const usersAuth_1 = __importDefault(require("../../../handlers/usersAuth"));
const UserRoute = (0, express_1.Router)();
UserRoute.use(usersAuth_1.default);
UserRoute.get("/profile", getUserProfile_1.default);
exports.default = UserRoute;
