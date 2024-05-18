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
const vendors_model_1 = __importDefault(require("../../../../models/vendors.model"));
const VendorsSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting data from req.body.
    const { email, password, confirm_password, business_name } = req.body;
    // General validations...
    if (!email)
        throw "Email is required!";
    if (!password)
        throw "Password is required";
    if (password != confirm_password)
        throw "Password and confirm password donot match!";
    if (!business_name)
        throw "Business name is required!";
    if (business_name.length < 3)
        throw "Name must be at least 3 characters long!";
    // Database validation...
    const existingUser = yield vendors_model_1.default.findOne({
        email,
    });
    if (existingUser)
        throw "This email already exists! Please try another!";
    // If everything is good, move forward!
    // Hasing password so that even if our DB is compromised, we dont expose user passwords. Hashed password cannot be converted back into original string, can only be compared..
    let encryptedPassword = yield bcrypt_1.default.hash(password, 8);
    const createdUser = yield vendors_model_1.default.create({
        email,
        business_name,
        password: encryptedPassword.toString(),
    });
    const jwtPayload = {
        vendor_id: createdUser._id,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, process.env.jwt_secret_vendor, {
        expiresIn: "90days",
    });
    res.status(200).json({
        status: "success",
        message: "Account created successfully!",
        accessToken,
    });
});
exports.default = VendorsSignup;
