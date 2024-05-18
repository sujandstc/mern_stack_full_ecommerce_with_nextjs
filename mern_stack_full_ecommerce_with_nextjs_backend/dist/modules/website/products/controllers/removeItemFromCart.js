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
const carts_model_1 = __importDefault(require("../../../../models/carts.model"));
const removeItemFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cart_id } = req.params;
    if (!cart_id)
        throw "Cart id is required!";
    if (!validator_1.default.isMongoId(cart_id))
        throw "Invalid product id provided.";
    const getCart = yield carts_model_1.default.findOne({
        _id: cart_id,
    });
    if (!getCart)
        throw "This item is already removed.";
    const unitPrice = getCart.price / getCart.quantity;
    const updatedValue = yield carts_model_1.default.findOneAndUpdate({
        _id: cart_id,
        user_id: req.user.user_id,
    }, {
        $inc: {
            quantity: -1,
            price: unitPrice * -1,
        },
    }, {
        new: true,
    });
    if (!updatedValue)
        throw "Error: 233424";
    if (updatedValue.quantity <= 0) {
        yield carts_model_1.default.deleteOne({
            _id: cart_id,
            user_id: req.user.user_id,
        });
    }
    res.status(200).json({
        status: "success",
        message: "Done!",
    });
});
exports.default = removeItemFromCart;
