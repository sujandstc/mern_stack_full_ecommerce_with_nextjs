import { Request, Response } from "express";
import ordersModel from "../../../../models/orders.model";

const getVendorOrders = async (req: Request, res: Response) => {
  const data = await ordersModel
    .find({
      vendor_id: req.vendor.vendor_id,
    })
    .populate("product_id")
    .populate("user_id");

  // Query chalaune..

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getVendorOrders;
