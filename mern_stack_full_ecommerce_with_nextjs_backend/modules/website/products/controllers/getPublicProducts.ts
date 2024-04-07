import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";

const getPublicProducts = async (req: Request, res: Response) => {
  const data = await productsModel.find({});

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getPublicProducts;
