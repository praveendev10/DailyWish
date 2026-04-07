export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
}
