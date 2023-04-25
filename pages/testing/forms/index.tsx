import styles from "@root/styles/Forms.module.css";
export default function FormsPage() {
  const handleSubmit = (e) => {
    e.preventDefault(e);
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Username: ${username}
      Email: ${email}
      Password: ${password}
      Confirm Password: ${confirmPassword}
    `);
  };
  return (
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
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <div className={styles.formBlock}>
          <button type="submit" className={styles.button}>
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}
