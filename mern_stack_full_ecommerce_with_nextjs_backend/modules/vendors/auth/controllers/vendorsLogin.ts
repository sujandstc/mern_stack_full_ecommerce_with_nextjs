import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import vendorModel from "../../../../models/vendors.model";

const vendorsLogin = async (req: Request, res: Response) => {
  // Getting data from req.body.
  const { email, password } = req.body;

  // General validations...
  if (!email) throw "Email is required!";
  if (!password) throw "Password is required";

  // Get user that matches email provided by user...

  const getUser = await vendorModel
    .findOne({
      email: email,
    })
    .select("+password");

  if (!getUser) throw "This vendor email doesnot exist!";

  // If everything is good, move forward!

  // Compare password!
  let comparePassword = await bcrypt.compare(password, getUser.password);
  if (!comparePassword) throw "Password donot match!";

  // await usersModel.updateOne({ email: email }, { auth_id: uniqueId });

  const jwtPayload = {
    vendor_id: getUser._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret!, {
    expiresIn: "90days",
  });

  res.status(200).json({
    status: "success",
    message: "Logged in successfully!",
    accessToken,
  });
};

export default vendorsLogin;
