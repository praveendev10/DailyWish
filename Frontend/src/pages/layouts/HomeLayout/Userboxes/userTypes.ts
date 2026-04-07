export type UserData = {
  name?: string;
  email: string;
  password: string;
};

export type Props = {
  postData: (data: UserData) => void; // ✅ fix
  name?: string;
  isSignup?: boolean;
};

export type ButtonProps = {
  postData: () => void;
  disabled: boolean;
};