import { Router } from "express";
import UserSignup from "./controllers/userRegister";
import usersLogin from "./controllers/userLogin";

const UserAuthRouter = Router();

UserAuthRouter.post("/register", UserSignup);
UserAuthRouter.post("/login", usersLogin);

export default UserAuthRouter;
