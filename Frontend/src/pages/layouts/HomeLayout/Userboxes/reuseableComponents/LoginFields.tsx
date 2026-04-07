import styles from "./LoginFields.module.css";
import { useState } from "react";
import ButtonFields from "./ButtonFields";
import type { Props } from "../userTypes";
import {
  validateEmail,
  validatePassword,
} from "../../../../../utils/validation";
function LoginFields({ postData, name, isSignup }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    validateEmail(email) &&
    validatePassword(password) &&
    (isSignup ? name?.trim() !== "" : true);
   
  return (
    <>
      <div className={styles.fieldContainer}>
        <div className={styles.formGroup}>
          <label>User ID</label>
          <input
            type="email"
            placeholder="Enter ID"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <ButtonFields /> */}
      </div>
      <ButtonFields
        postData={() =>
          postData({
            name: "",
            email,
            password,
          })
        }
        disabled={!isFormValid}
      />
    </>
  );
}

export default LoginFields;
