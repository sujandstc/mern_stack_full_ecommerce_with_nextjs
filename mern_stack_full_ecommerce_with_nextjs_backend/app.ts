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

// Routes...

app.use("/api/v1/vendors/auth", VendorsAuthRoute);
app.use("/api/v1/vendors/products", VendorsProductRoute);

// Website related..
app.use("/api/v1/website/products", WebsiteProductsRouter);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
