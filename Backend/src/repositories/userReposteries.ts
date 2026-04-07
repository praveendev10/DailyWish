import { userDTO } from "../DTO/type.user.types";
import User from "../models/user.model";
export const userCheck = async (data: userDTO) => {
  const user = await User.findOne({ email: data.email });
  return user;
};
export const createUser=async (data:userDTO)=>{
     const user = await User.create(data);
     return user;
}
export const deleteUser=async(data:userDTO)=>{
    await User.findOneAndDelete({ email: data.email });
}