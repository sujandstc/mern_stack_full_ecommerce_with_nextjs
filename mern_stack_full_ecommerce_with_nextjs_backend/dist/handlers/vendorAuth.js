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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const vendorAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Auth data is mostly sent via authorization header.. so, checking it..
    if (!req.headers.authorization)
        throw "Authorization error!";
    // Authorization header is generally sent as {authorization:"Bearer accessToken"} so, splitting so we only get the jwt string
    const accessToken = req.headers.authorization.split(" ")[1];
    if (!accessToken)
        throw "Auth error. No accessToken!";
    // Veryify jwt
    try {
        // If this fails, an error is thrown which will be caught by catch block...
        const jwtVerify = jsonwebtoken_1.default.verify(accessToken, process.env.jwt_secret_vendor);
        // If this is successful, jwt verify will give the decoded payload... We then save that payload to req.user object
        // Hypothetically, id card has been kept on your neck..
        req.vendor = jwtVerify;
    }
    catch (e) {
        // We are using throw there to give an error that will later be caught by errorHandler..
        throw "Authorization error! JWT mismatch!";
    }
    // If everything is good, moving forward!
    next();
});
exports.default = vendorAuth;
