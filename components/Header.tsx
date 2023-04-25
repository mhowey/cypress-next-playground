import { GrTest } from "react-icons/gr";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link href="/"><GrTest className={styles.logo} /></Link> <h2>Cypress Testing</h2>
      </div>
      <h2>NEXT.js Proof of Concept</h2>
    </header>
  )
}