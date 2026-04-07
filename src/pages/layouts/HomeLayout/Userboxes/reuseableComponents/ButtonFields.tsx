import type { ButtonProps } from "../userTypes";
import styles from "./ButtonFielsd.module.css";
function ButtonFields({ postData, disabled }: ButtonProps) {
  return (
    <>
      <div className={styles.btndiv}>
        <button type="button" onClick={postData} disabled={disabled}>
          Submit
        </button>
        <button type="button">Cancel</button>
      </div>
      <div>
        <span className={styles.newUser}>New user?</span>
      </div>
    </>
  );
}

export default ButtonFields;
