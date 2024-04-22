import { Request, Response } from "express";
import validator from "validator";
import productsModel from "../../../../models/products.model";
import _ from "lodash";

const addProduct = async (req: Request, res: Response) => {
  let { product_name, product_price, product_description, product_image } =
    req.body;

  if (!product_name) throw "Product name is required!";
  if (!product_price) throw "Product price is required!";
  if (!validator.isAlphanumeric(product_price.toString()))
    throw "Price is invalid!";
  if (product_price < 1) throw "Product price must be at least Rs.1";

  product_name = _.capitalize(product_name);

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
