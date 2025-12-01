import styles from "./ButtonFielsd.module.css";
function ButtonFields() {
  return (
    <>
      <div className={styles.btndiv}>
        <button type="button">Submit</button>
        <button type="button">Cancel</button>
      </div>
      <div>
        <span className={styles.newUser}>New user?</span>
      </div>
    </>
  );
}

export default ButtonFields;
