import { IUser } from "../interfaces/user.interface";
import User from "../models/user.model";
import { userDTO } from "../DTO/type.user.types";

const userCheck = async (data: userDTO) => {
  const user = await User.findOne({ email: data.email });
  return user;
};
export const userService = async (data: userDTO) => {
  const existedUser = await userCheck(data);
  if (existedUser) {
    throw new Error("User already exist");
  }
  const user = await User.create(data);
  return user;
};

export const userExistService = async (data: userDTO) => {
  const existedUser = await userCheck(data);
  if (!existedUser) {
    throw new Error("User not exist");
  }
  await User.findOneAndDelete({ email: data.email });
};
