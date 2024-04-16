import { Router } from "express";
import getPublicProducts from "./controllers/getPublicProducts";
import usersAuth from "../../../handlers/usersAuth";
import addToCart from "./controllers/addToCart";
import getCartItems from "./controllers/getCartItems";
import removeItemFromCart from "./controllers/removeItemFromCart";
import checkOut from "./controllers/checkOut";
import cancelOrder from "./controllers/cancelOrder";
import getOrders from "./controllers/getOrders";

const WebsiteProductsRouter = Router();

WebsiteProductsRouter.get("/", getPublicProducts);

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
