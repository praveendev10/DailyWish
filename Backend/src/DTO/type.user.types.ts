import { IUser } from "../interfaces/user.interface";

export type userDTO = Pick<IUser, "email" | "name" | "password">;
