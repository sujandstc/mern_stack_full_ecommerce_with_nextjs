import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import vendorModel from "../../../../models/vendors.model";

const VendorsSignup = async (req: Request, res: Response) => {
  // Getting data from req.body.
  const { email, password, confirm_password, business_name } = req.body;

  // General validations...
  if (!email) throw "Email is required!";
  if (!password) throw "Password is required";
  if (password != confirm_password)
    throw "Password and confirm password donot match!";
  if (!business_name) throw "Business name is required!";
  if (business_name.length < 3)
    throw "Name must be at least 3 characters long!";

  // Database validation...

  const existingUser = await vendorModel.findOne({
    email,
  });

  if (existingUser) throw "This email already exists! Please try another!";

  // If everything is good, move forward!

  // Hasing password so that even if our DB is compromised, we dont expose user passwords. Hashed password cannot be converted back into original string, can only be compared..

  let encryptedPassword = await bcrypt.hash(password, 8);

  const createdUser = await vendorModel.create({
    email,
    business_name,
    password: encryptedPassword.toString(),
  });

  const jwtPayload = {
    vendor_id: createdUser._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret!, {
    expiresIn: "90days",
  });

  res.status(200).json({
    status: "success",
    message: "Account created successfully!",
    accessToken,
  });
};

export default VendorsSignup;
