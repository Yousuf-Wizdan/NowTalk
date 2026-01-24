import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { getUsersService, updateUserProfileService } from "../services/user.service";

export const getUsersController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;

    const users = await getUsersService(userId);

    return res.status(HTTPSTATUS.OK).json({
      message: "Users retrieved successfully",
      users,
    });
  }
);

export const updateUserProfileController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.user?._id;
    const { name, email, avatar } = req.body;

    const updatedUser = await updateUserProfileService(userId, {
      name,
      email,
      avatar,
    });

    return res.status(HTTPSTATUS.OK).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  }
);