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
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield carts_model_1.default
        .find({
        user_id: req.user.user_id,
    })
        .populate("product_id");
    let total_amount = 0;
    data.map((singleItem) => {
        total_amount = total_amount + singleItem.price;
    });
    res.status(200).json({
        status: "cart",
        data: data,
        total_amount: total_amount,
    });
});
exports.default = getCartItems;