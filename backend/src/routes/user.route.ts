import { Router } from "express";
import { passportAuthenticateJwt } from "../config/passport.config";
import { getUsersController, updateUserProfileController } from "../controllers/user.controller";

const userRoutes = Router()
  .use(passportAuthenticateJwt)
  .get("/all", getUsersController)
  .patch("/profile", updateUserProfileController);

export default userRoutes;