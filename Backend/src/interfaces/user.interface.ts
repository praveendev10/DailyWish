export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
export interface IUserLog {
  email: Pick<IUser, "email">;
  password: Pick<IUser, "password">;
}
