import { GrTest } from "react-icons/gr";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoBox}>
          <Link href="/">
            <GrTest className={styles.logo} />
          </Link>{" "}
          <h2>cypress-testing-v1</h2>
        </div>
        <h2>NEXT.js Cypress Playground</h2>
      </header>
      <ul className={styles.flexList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/testing/charts">Charts</Link>
        </li>
        <li>
          <Link href="/testing/photos">Photos</Link>
        </li>
        <li>
          <Link href="/testing/forms">Forms</Link>
        </li>
      </ul>
    </>
  );
}
