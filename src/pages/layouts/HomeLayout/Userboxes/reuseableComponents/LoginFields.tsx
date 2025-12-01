import styles from "./LoginFields.module.css";
import ButtonFields from "./ButtonFields";
function LoginFields() {
  return (
    <>
      <div className={styles.fieldContainer}>
        <div className={styles.formGroup}>
          <label>User ID</label>
          <input type="email" placeholder="Enter ID" />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        {/* <ButtonFields /> */}
      </div>
      <ButtonFields />
    </>
  );
}

export default LoginFields;
