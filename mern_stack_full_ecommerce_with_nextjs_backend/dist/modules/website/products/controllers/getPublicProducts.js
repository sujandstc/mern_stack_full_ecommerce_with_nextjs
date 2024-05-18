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
const getPublicProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit } = req.query;
    let pagination_page = parseInt((page !== null && page !== void 0 ? page : 0).toString());
    let pagination_limit = parseInt((limit !== null && limit !== void 0 ? limit : 0).toString());
    let skip = 0;
    if (pagination_page && pagination_page) {
        skip = pagination_page * pagination_limit;
    }
    const data = yield products_model_1.default.find().skip(skip).limit(pagination_limit);
    res.status(200).json({
        status: "success",
        total_records: data.length,
        data,
    });
});
exports.default = getPublicProducts;
