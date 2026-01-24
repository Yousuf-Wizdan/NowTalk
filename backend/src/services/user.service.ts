import UserModel from "../models/user.model";
import cloudinary from "../config/cloudinary.config";

export const findByIdUserService = async (userId: string) => {
  return await UserModel.findById(userId);
};

export const getUsersService = async (userId: string) => {
  const users = await UserModel.find({ _id: { $ne: userId } }).select(
    "-password"
  );

  return users;
};

export const updateUserProfileService = async (
  userId: string,
  data: { name?: string; email?: string; avatar?: string }
) => {
  let avatarUrl;

  if (data.avatar) {
    // Check if it's a base64 image (needs upload) or a URL (use as is)
    if (data.avatar.startsWith('data:')) {
      // Upload to Cloudinary if it's base64
      const uploadRes = await cloudinary.uploader.upload(data.avatar, {
        folder: "nowtalk/avatars",
      });
      avatarUrl = uploadRes.secure_url;
    } else {
      // Use the URL directly
      avatarUrl = data.avatar;
    }
  }

  const updateData: any = {};
  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;
  if (avatarUrl) updateData.avatar = avatarUrl;

  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    updateData,
    { new: true }
  ).select("-password");

  return updatedUser;
};