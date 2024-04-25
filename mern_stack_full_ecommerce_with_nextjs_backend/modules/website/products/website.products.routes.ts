import { Router } from "express";
import usersAuth from "../../../handlers/usersAuth";
import addToCart from "./controllers/addToCart";
import getCartItems from "./controllers/getCartItems";
import removeItemFromCart from "./controllers/removeItemFromCart";
import checkOut from "./controllers/checkOut";
import cancelOrder from "./controllers/cancelOrder";
import getOrders from "./controllers/getOrders";
import getRandomProducts from "./controllers/getRandomProduct";
import getPublicProducts from "./controllers/getPublicProducts";
import getPublicProductsReusableMongoose from "./controllers/getPublicProductsReusableMongoose";

const WebsiteProductsRouter = Router();

WebsiteProductsRouter.get("/", getPublicProductsReusableMongoose);
WebsiteProductsRouter.get("/random", getRandomProducts);

WebsiteProductsRouter.use(usersAuth);

/// Protected routes...

// Cart sanga  related..
WebsiteProductsRouter.post("/addToCart", addToCart);
WebsiteProductsRouter.delete("/removeFromCart/:cart_id", removeItemFromCart);
WebsiteProductsRouter.get("/cart", getCartItems);

// Order sagna related..
WebsiteProductsRouter.get("/orders", getOrders);
WebsiteProductsRouter.post("/checkout", checkOut);
WebsiteProductsRouter.delete("/cancel/:order_id", cancelOrder);

export default WebsiteProductsRouter;
