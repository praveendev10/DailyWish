import styles from "./LoginUser.module.css";
import LoginFields from "./reuseableComponents/LoginFields";
import type { UserData } from "./userTypes";
function LoginUser() {
  const postData = (data: UserData): void => {
    console.log({ email: data.email, password: data.password });
  };
  return (
    <div className={styles.loginUserdiv}>
      <LoginFields postData={postData} />
    </div>
  );
}

export default LoginUser;
