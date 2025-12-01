import styles from "./LoginUser.module.css";
import LoginFields from "./reuseableComponents/LoginFields";
function LoginUser() {
  return (
    <div className={styles.loginUserdiv}>
      <LoginFields />
    </div>
  );
}

export default LoginUser;
