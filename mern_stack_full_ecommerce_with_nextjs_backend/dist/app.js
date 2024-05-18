"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const errorHandler_1 = __importDefault(require("./handlers/errorHandler"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Connecting to mongodb
mongoose_1.default
    .connect(process.env.mongo_connect, {})
    .then(() => {
    console.log("MongoDB connected successfully!");
})
    .catch((e) => {
    console.log("Connection failed!");
    console.log(e);
});
require("./model");
const vendors_auth_routes_1 = __importDefault(require("./modules/vendors/auth/vendors.auth.routes"));
const vendors_products_routes_1 = __importDefault(require("./modules/vendors/products/vendors.products.routes"));
const website_products_routes_1 = __importDefault(require("./modules/website/products/website.products.routes"));
const userauth_routes_1 = __importDefault(require("./modules/website/userAuth/userauth.routes"));
const userauth_routes_2 = __importDefault(require("./modules/website/users/userauth.routes"));
const orders_routes_1 = __importDefault(require("./modules/vendors/orders/orders.routes"));
// Routes...
app.use("/api/v1/vendors/auth", vendors_auth_routes_1.default);
app.use("/api/v1/vendors/products", vendors_products_routes_1.default);
app.use("/api/v1/vendors/orders", orders_routes_1.default);
// Website related..
app.use("/api/v1/website/products", website_products_routes_1.default);
app.use("/api/v1/website/users/auth", userauth_routes_1.default);
app.use("/api/v1/website/users", userauth_routes_2.default);
app.use(errorHandler_1.default);
app.listen(8000, () => {
    console.log("Server started successfully!");
});
