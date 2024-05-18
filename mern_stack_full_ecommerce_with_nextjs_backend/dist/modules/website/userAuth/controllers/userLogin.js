"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = __importDefault(require("../../../../models/users.model"));
const usersLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting data from req.body.
    const { email, password } = req.body;
    // General validations...
    if (!email)
        throw "Email is required!";
    if (!password)
        throw "Password is required";
    // Get user that matches email provided by user...
    const getUser = yield users_model_1.default
        .findOne({
        email: email,
    })
        .select("+password");
    if (!getUser)
        throw "This user email doesnot exist!";
    // If everything is good, move forward!
    // Compare password!
    let comparePassword = yield bcrypt_1.default.compare(password, getUser.password);
    if (!comparePassword)
        throw "Password donot match!";
    // await usersModel.updateOne({ email: email }, { auth_id: uniqueId });
    const jwtPayload = {
        user_id: getUser._id,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, process.env.jwt_secret_user, {
        expiresIn: "90days",
    });
    res.status(200).json({
        status: "success",
        message: "Logged in successfully!",
        accessToken,
    });
});
exports.default = usersLogin;
