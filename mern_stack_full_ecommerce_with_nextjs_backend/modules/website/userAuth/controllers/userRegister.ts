import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import usersModel from "../../../../models/users.model";

const UserSignup = async (req: Request, res: Response) => {
  // Getting data from req.body.
  const { email, password, confirm_password, name, location } = req.body;

  // General validations...
  if (!email) throw "Email is required!";
  if (!password) throw "Password is required";
  if (password != confirm_password)
    throw "Password and confirm password donot match!";
  if (!name) throw "Name is required!";
  if (name.length < 3) throw "Name must be at least 3 characters long!";
  if (!location) throw "Location is requiredQ!";

  // Database validation...

  const existingUser = await usersModel.findOne({
    email,
  });

  if (existingUser) throw "This email already exists! Please try another!";

  // If everything is good, move forward!

  // Hasing password so that even if our DB is compromised, we dont expose user passwords. Hashed password cannot be converted back into original string, can only be compared..

  let encryptedPassword = await bcrypt.hash(password, 8);

  const createdUser = await usersModel.create({
    email,
    name,
    location,
    password: encryptedPassword.toString(),
  });

  const jwtPayload = {
    user_id: createdUser._id,
  };

  const accessToken = jwt.sign(jwtPayload, process.env!.jwt_secret_user!, {
    expiresIn: "90days",
  });

  res.status(200).json({
    status: "success",
    message: "User account created successfully!",
    accessToken,
  });
};

export default UserSignup;
