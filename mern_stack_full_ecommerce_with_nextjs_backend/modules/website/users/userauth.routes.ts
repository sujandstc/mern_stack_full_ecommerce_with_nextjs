import { Router } from "express";
import UserProfile from "./controllers/getUserProfile";
import usersAuth from "../../../handlers/usersAuth";

const UserRoute = Router();

UserRoute.use(usersAuth);

UserRoute.get("/profile", UserProfile);

export default UserRoute;
