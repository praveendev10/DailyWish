import styles from "./LoginUser.module.css";
import LoginFields from "./reuseableComponents/LoginFields";
function NewUser() {
  return (
    <div className={styles.loginUserdiv}>
      <div className={styles.userNamediv}>
        <label>User Name</label>
        <input type="text" placeholder="Enter Name" />
      </div>
      <LoginFields />
    </div>
  );
}

export default NewUser;
