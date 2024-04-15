import { Router } from "express";
import getPublicProducts from "./controllers/getPublicProducts";
import usersAuth from "../../../handlers/usersAuth";
import addToCart from "./controllers/addToCart";
import getCartItems from "./controllers/getCartItems";
import removeItemFromCart from "./controllers/removeItemFromCart";

const WebsiteProductsRouter = Router();

WebsiteProductsRouter.get("/", getPublicProducts);

WebsiteProductsRouter.use(usersAuth);

/// Protected routes...

WebsiteProductsRouter.post("/addToCart", addToCart);
WebsiteProductsRouter.delete("/removeFromCart/:cart_id", removeItemFromCart);
WebsiteProductsRouter.get("/cart", getCartItems);

export default WebsiteProductsRouter;
