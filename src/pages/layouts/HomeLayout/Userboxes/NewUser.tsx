import styles from "./LoginUser.module.css";
import { useState } from "react";
import LoginFields from "./reuseableComponents/LoginFields";
import type { UserData } from "./userTypes";
function NewUser() {
  const [user, setUser] = useState("");
  const postData = (data: UserData): void => {
      console.log({ name: user, email: data.email, password: data.password });
  };
  return (
    <div className={styles.loginUserdiv}>
      <div className={styles.userNamediv}>
        <label>User Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter Name"
        />
      </div>
      <LoginFields postData={postData} name={user} isSignup={true} />
    </div>
  );
}

export default NewUser;
