import { Router } from "express";
import vendorAuth from "../../../handlers/vendorAuth";
import getVendorOrders from "./controllers/getVendorOrders";

const VendorOrderRoute = Router();

VendorOrderRoute.use(vendorAuth);

VendorOrderRoute.get("/", getVendorOrders);

export default VendorOrderRoute;
