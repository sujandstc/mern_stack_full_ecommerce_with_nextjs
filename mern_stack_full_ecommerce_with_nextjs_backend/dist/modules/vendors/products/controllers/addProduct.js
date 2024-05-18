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
const validator_1 = __importDefault(require("validator"));
const products_model_1 = __importDefault(require("../../../../models/products.model"));
const lodash_1 = __importDefault(require("lodash"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { product_name, product_price, product_description, product_image } = req.body;
    if (!product_name)
        throw "Product name is required!";
    if (!product_price)
        throw "Product price is required!";
    if (!validator_1.default.isAlphanumeric(product_price.toString()))
        throw "Price is invalid!";
    if (product_price < 1)
        throw "Product price must be at least Rs.1";
    product_name = lodash_1.default.capitalize(product_name);
    yield products_model_1.default.create({
        vendor_id: req.vendor.vendor_id,
        product_name,
        product_price,
        product_description,
        product_image,
    });
    res.status(200).json({
        status: "success",
        message: "Product added successfully!",
    });
});
exports.default = addProduct;
