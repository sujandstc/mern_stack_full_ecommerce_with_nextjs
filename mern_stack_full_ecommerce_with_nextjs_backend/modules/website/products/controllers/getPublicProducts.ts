import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";
import reusableMongoose from "../../../../handlers/reusableMongoose";

const getPublicProducts = async (req: Request, res: Response) => {
  const queryData = reusableMongoose({
    // kun model bata data fing garne ya lekhne...
    mongooseQuery: productsModel.find({}),
    // Query pass garne..
    queryObject: req.query,
    // Kun kun fields bata searcg garne, ya array ma halne..
    searchFields: ["products_name", "product_description"],
  });

  // Query chalaune..

  const data = await queryData.query.populate("vendor_id", "business_name");

  res.status(200).json({
    status: "success",
    total_records: data.length,
    data,
  });
};

export default getPublicProducts;
