import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";

const getPublicProducts = async (req: Request, res: Response) => {
  const { page, limit } = req.query;

  let pagination_page = parseInt((page ?? 0).toString());
  let pagination_limit = parseInt((limit ?? 0).toString());

  let skip = 0;

  if (pagination_page && pagination_page) {
    skip = pagination_page * pagination_limit;
  }

  const data = await productsModel.find().skip(skip).limit(pagination_limit);

  res.status(200).json({
    status: "success",
    total_records: data.length,
    data,
  });
};

export default getPublicProducts;
