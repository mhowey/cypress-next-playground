import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cypress Testing Proof of Concept</title>
        <meta name="description" content="com.design.howey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1>Cypress Test App</h1>
          <p>
            This is a mock app to run Cypress tests against. It&apos;s built
            with Next.js and hand-coded CSS modules for styling.
          </p>
        </div>
      </main>
    </>
  );
}
