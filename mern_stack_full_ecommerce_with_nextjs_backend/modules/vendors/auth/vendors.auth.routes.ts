import { Router } from "express";
import vendorsSignup from "./controllers/vendorsSignup";
import vendorsLogin from "./controllers/vendorsLogin";

const VendorsAuthRoute = Router();

VendorsAuthRoute.post("/signup", vendorsSignup);
VendorsAuthRoute.post("/login", vendorsLogin);

export default VendorsAuthRoute;
