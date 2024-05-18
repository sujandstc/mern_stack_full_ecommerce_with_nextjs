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
const validator_1 = __importDefault(require("validator"));
const carts_model_1 = __importDefault(require("../../../../models/carts.model"));
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product_id, quantity } = req.body;
    if (!product_id)
        throw "Product id is required!";
    if (!quantity)
        throw "Quantity is required!";
    if (!validator_1.default.isAlphanumeric(quantity.toString()))
        throw "Quantify must be a number.";
    if (quantity < 1)
        throw "At least 1 item is required to be added on cart!";
    if (!validator_1.default.isMongoId(product_id))
        throw "Invalid product id provided.";
    const getProduct = yield products_model_1.default.findOne({
        _id: product_id,
    });
    if (!getProduct)
        throw "This product does not exist or is no longer on stock.";
    const productInCart = yield carts_model_1.default.findOne({
        user_id: req.user.user_id,
        product_id: product_id,
    });
    const price = getProduct.product_price * quantity;
    if (!productInCart) {
        yield carts_model_1.default.create({
            user_id: req.user.user_id,
            product_id: product_id,
            quantity: quantity,
            price,
        });
    }
    else {
        yield carts_model_1.default.updateOne({
            user_id: req.user.user_id,
            product_id: product_id,
        }, {
            $inc: {
                quantity: quantity,
                price: price,
            },
        });
    }
    res.status(200).json({
        status: "cart",
        message: "Successfully added to cart!",
    });
});
exports.default = addToCart;
