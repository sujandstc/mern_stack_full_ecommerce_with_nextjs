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
const orders_model_1 = __importDefault(require("../../../../models/orders.model"));
const cancelOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { order_id } = req.params;
    const getOrder = yield orders_model_1.default.findOne({
        user_id: req.user.user_id,
        _id: order_id,
    });
    if (!getOrder)
        throw "This order does not exist!";
    if (getOrder.status != "order_placed")
        throw "This order cannot be cancelled. Please contact vendor.";
    yield orders_model_1.default.updateOne({
        user_id: req.user.user_id,
        _id: order_id,
    }, {
        status: "cancelled",
    });
    res.status(200).json({
        status: "cart",
        message: "Order cancelled successfully!",
    });
});
exports.default = cancelOrder;
