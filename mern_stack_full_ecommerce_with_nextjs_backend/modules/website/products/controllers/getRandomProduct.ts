import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";

const getRandomProducts = async (req: Request, res: Response) => {
  const data = await productsModel.aggregate([
    {
      $sample: {
        size: 2,
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getRandomProducts;
