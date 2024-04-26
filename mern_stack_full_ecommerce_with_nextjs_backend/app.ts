import "express-async-errors";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import errorHandler from "./handlers/errorHandler";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// Connecting to mongodb
mongoose
  .connect(process.env.mongo_connect!, {})
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((e: any) => {
    console.log("Connection failed!");
    console.log(e);
  });

import "./model";
import VendorsAuthRoute from "./modules/vendors/auth/vendors.auth.routes";
import VendorsProductRoute from "./modules/vendors/products/vendors.products.routes";
import WebsiteProductsRouter from "./modules/website/products/website.products.routes";
import UserAuthRouter from "./modules/website/userAuth/userauth.routes";
import UserRoute from "./modules/website/users/userauth.routes";
import VendorOrderRoute from "./modules/vendors/orders/orders.routes";

// Routes...

app.use("/api/v1/vendors/auth", VendorsAuthRoute);
app.use("/api/v1/vendors/products", VendorsProductRoute);
app.use("/api/v1/vendors/orders", VendorOrderRoute);

// Website related..
app.use("/api/v1/website/products", WebsiteProductsRouter);
app.use("/api/v1/website/users/auth", UserAuthRouter);
app.use("/api/v1/website/users", UserRoute);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
