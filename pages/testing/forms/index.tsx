import { useState } from "react";

import styles from "@root/styles/Forms.module.css";

export default function FormsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const { firstName, lastName, username, email, password, confirmPassword } =
      e.target;

    setError("");
    if (confirmPassword.value !== password.value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
    // very manual and basic implementation of form validation
    // to demonstrate cypress testing
    !firstName.value
      ? setError("First Name is required")
      : setFirstName(firstName.value);
    setFirstName(firstName.value);
    !lastName.value
      ? setError("Last Name is required")
      : setLastName(lastName.value);
    !username.value
      ? setError("Username is required")
      : setLastName(username.value);
    !email.value ? setError("Email is required") : setEmail(email.value);
    !password.value
      ? setError("Password is required")
      : setpassword(password.value);
    !confirmPassword.value
      ? setError("Confirm Password is required")
      : setConfirmPassword(confirmPassword.value);
  };
  return (
    <div className={styles.flexWrapper}>
      <div className={styles.formWrapper}>
        <h1>Forms Page</h1>
        <form method="get" className={styles.inputForm} onSubmit={handleSubmit}>
          <div className={styles.formBlock}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" name="firstName" />
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" />
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input type="text" id="username" name="username" />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input type="password" id="password" name="password" />
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <div className={styles.formBlock}>
            <p id="error" className={styles.error}>
              {error}
            </p>
            <button id="submitBtn" type="submit" className={styles.button}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2>Form Output</h2>
        <hr />
        <p id="firstName">First Name: {firstName}</p>
        <p id="lastName">Last Name: {lastName}</p>
        <p id="username">Username: {username}</p>
        <p id="email">Email: {email}</p>
        <p id="password">Password: {password}</p>
        <p id="confirmPassword">Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
}
