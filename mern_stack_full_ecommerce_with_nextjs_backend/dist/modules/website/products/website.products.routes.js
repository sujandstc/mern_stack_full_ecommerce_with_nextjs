"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersAuth_1 = __importDefault(require("../../../handlers/usersAuth"));
const addToCart_1 = __importDefault(require("./controllers/addToCart"));
const getCartItems_1 = __importDefault(require("./controllers/getCartItems"));
const removeItemFromCart_1 = __importDefault(require("./controllers/removeItemFromCart"));
const checkOut_1 = __importDefault(require("./controllers/checkOut"));
const cancelOrder_1 = __importDefault(require("./controllers/cancelOrder"));
const getOrders_1 = __importDefault(require("./controllers/getOrders"));
const getRandomProduct_1 = __importDefault(require("./controllers/getRandomProduct"));
const getPublicProductsReusableMongoose_1 = __importDefault(require("./controllers/getPublicProductsReusableMongoose"));
const WebsiteProductsRouter = (0, express_1.Router)();
WebsiteProductsRouter.get("/", getPublicProductsReusableMongoose_1.default);
WebsiteProductsRouter.get("/random", getRandomProduct_1.default);
WebsiteProductsRouter.use(usersAuth_1.default);
/// Protected routes...
// Cart sanga  related..
WebsiteProductsRouter.post("/addToCart", addToCart_1.default);
WebsiteProductsRouter.delete("/removeFromCart/:cart_id", removeItemFromCart_1.default);
WebsiteProductsRouter.get("/cart", getCartItems_1.default);
// Order sagna related..
WebsiteProductsRouter.get("/orders", getOrders_1.default);
WebsiteProductsRouter.post("/checkout", checkOut_1.default);
WebsiteProductsRouter.delete("/cancel/:order_id", cancelOrder_1.default);
exports.default = WebsiteProductsRouter;
