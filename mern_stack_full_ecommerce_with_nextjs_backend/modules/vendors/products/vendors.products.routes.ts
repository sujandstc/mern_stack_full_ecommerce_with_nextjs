import { Router } from "express";
import addProduct from "./controllers/addProduct";
import vendorAuth from "../../../handlers/vendorAuth";
import editProduct from "./controllers/editProduct";
import deleteProduct from "./controllers/deleteProduct";
import getProducts from "./controllers/getProducts";

const VendorsProductRoute = Router();

VendorsProductRoute.use(vendorAuth);

VendorsProductRoute.get("/", getProducts);
VendorsProductRoute.post("/", addProduct);
VendorsProductRoute.patch("/", editProduct);
VendorsProductRoute.delete("/:product_id", deleteProduct);
// VendorsProductRoute.post("/login", vendorsLogin);

export default VendorsProductRoute;
