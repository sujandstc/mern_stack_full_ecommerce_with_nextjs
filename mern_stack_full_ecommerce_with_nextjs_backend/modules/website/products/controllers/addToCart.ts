import { Request, Response } from "express";
import productsModel from "../../../../models/products.model";
import validator from "validator";
import cartsModel from "../../../../models/carts.model";

const addToCart = async (req: Request, res: Response) => {
  const { product_id, quantity } = req.body;

  if (!product_id) throw "Product id is required!";
  if (!quantity) throw "Quantity is required!";
  if (!validator.isAlphanumeric(quantity.toString()))
    throw "Quantify must be a number.";

  if (quantity < 1) throw "At least 1 item is required to be added on cart!";

  if (!validator.isMongoId(product_id)) throw "Invalid product id provided.";

  const getProduct = await productsModel.findOne({
    _id: product_id,
  });

  if (!getProduct)
    throw "This product does not exist or is no longer on stock.";

  const productInCart = await cartsModel.findOne({
    user_id: req.user.user_id,
    product_id: product_id,
  });

  const price = getProduct.product_price * quantity;

  if (!productInCart) {
    await cartsModel.create({
      user_id: req.user.user_id,
      product_id: product_id,
      quantity: quantity,
      price,
    });
  } else {
    await cartsModel.updateOne(
      {
        user_id: req.user.user_id,
        product_id: product_id,
      },
      {
        $inc: {
          quantity: quantity,
          price: price,
        },
      }
    );
  }

  res.status(200).json({
    status: "cart",
    message: "Successfully added to cart!",
  });
};

export default addToCart;
