import { Request, Response } from "express";
import validator from "validator";
import productsModel from "../../../../models/products.model";

const addProduct = async (req: Request, res: Response) => {
  const { product_name, product_price, product_description, product_image } =
    req.body;

  if (!product_name) throw "Product name is required!";
  if (!product_price) throw "Product price is required!";
  if (!validator.isAlphanumeric(product_price.toString()))
    throw "Price is invalid!";
  if (product_price < 1) throw "Product price must be at least Rs.1";

  await productsModel.create({
    vendor_id: req.vendor.vendor_id,
    product_name,
    product_price,
    product_description,
    product_image,
  });

  res.status(200).json({
    status: "success",
    message: "Product added successfully!",
  });
};

export default addProduct;
