//import { IUser } from "../interfaces/user.interface";
//import User from "../models/user.model";
import { userDTO } from "../DTO/type.user.types";
import {
  userCheck,
  createUser,
  deleteUser,
} from "../repositories/userReposteries";

export const userService = async (data: userDTO) => {
  const existedUser = await userCheck(data);
  if (existedUser) {
    throw new Error(`${existedUser.name} User already exists`);
  }
  const user = await createUser(data);
  return user;
};

export const userExistService = async (data: userDTO) => {
  const existedUser = await userCheck(data);
  if (!existedUser) {
    throw new Error("User not exist");
  }
  await deleteUser(data);
};
