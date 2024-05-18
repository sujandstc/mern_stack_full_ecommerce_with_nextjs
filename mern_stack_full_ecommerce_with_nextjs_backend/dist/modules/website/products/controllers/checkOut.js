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
const carts_model_1 = __importDefault(require("../../../../models/carts.model"));
const orders_model_1 = __importDefault(require("../../../../models/orders.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const products_model_1 = __importDefault(require("../../../../models/products.model"));
const checkOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Default >> Cash on delivery..
    const productsInCart = yield carts_model_1.default.find({
        user_id: req.user.user_id,
    });
    if (productsInCart.length < 1)
        throw "Nothing in your cart.";
    let itemsForOrder = [];
    // For loop...
    for (const singleItem of productsInCart) {
        const getProduct = yield products_model_1.default.findOne({
            _id: singleItem.product_id,
        });
        itemsForOrder.push({
            vendor_id: getProduct === null || getProduct === void 0 ? void 0 : getProduct.vendor_id,
            product_id: singleItem.product_id,
            user_id: singleItem.user_id,
            quantity: singleItem.quantity,
            price: singleItem.price,
        });
    }
    const session = yield mongoose_1.default.startSession();
    yield session.withTransaction((session) => __awaiter(void 0, void 0, void 0, function* () {
        yield orders_model_1.default.insertMany(itemsForOrder, { session });
        yield carts_model_1.default.deleteMany({
            user_id: req.user.user_id,
        }, {
            session,
        });
    }));
    res.status(200).json({
        status: "cart",
        message: "Order placed successfully!",
    });
});
exports.default = checkOut;
