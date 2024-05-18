"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRegister_1 = __importDefault(require("./controllers/userRegister"));
const userLogin_1 = __importDefault(require("./controllers/userLogin"));
const UserAuthRouter = (0, express_1.Router)();
UserAuthRouter.post("/register", userRegister_1.default);
UserAuthRouter.post("/login", userLogin_1.default);
exports.default = UserAuthRouter;
