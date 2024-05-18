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
const products_model_1 = __importDefault(require("../../../../models/products.model"));
const reusableMongoose_1 = __importDefault(require("../../../../handlers/reusableMongoose"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryData = (0, reusableMongoose_1.default)({
        // kun model bata data fing garne ya lekhne...
        mongooseQuery: products_model_1.default.find({ vendor_id: req.vendor.vendor_id }),
        // Query pass garne..
        queryObject: req.query,
        // Kun kun fields bata searcg garne, ya array ma halne..
        searchFields: ["products_name", "product_description"],
    });
    // Query chalaune..
    const data = yield queryData.query.populate("vendor_id", "business_name");
    res.status(200).json({
        status: "success",
        data,
    });
});
exports.default = getProducts;
