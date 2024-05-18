"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    if (error) {
        console.log(error);
        if (typeof error === "string") {
            res.status(400).json({
                status: "Failed",
                message: error,
            });
        }
        else {
            res.status(400).json({
                status: "Failed",
                message: "Something went wrong!",
            });
        }
    }
    else {
        next();
    }
};
exports.default = errorHandler;
