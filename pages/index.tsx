import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@root/styles/Home.module.css'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

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
          <h1>Cypress Test Proof of Concept App</h1>
        </div>
        <div>
          <h2>Some Other Pages:</h2>
          <ul>
            <li><Link href="/charts">Charts</Link></li>
          </ul>
        </div>
        <div className={styles.flex}>
          <div className={styles.card}>
            <Image src="/unsplash_one.jpg" alt="unsplash_one" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_two.jpg" alt="unsplash_two" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_three.jpg" alt="unsplash_three" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_four.jpg" alt="unsplash_four" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_one.jpg" alt="unsplash_one" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_two.jpg" alt="unsplash_two" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_three.jpg" alt="unsplash_three" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_four.jpg" alt="unsplash_four" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_one.jpg" alt="unsplash_one" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_two.jpg" alt="unsplash_two" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_three.jpg" alt="unsplash_three" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_four.jpg" alt="unsplash_four" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_two.jpg" alt="unsplash_two" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_three.jpg" alt="unsplash_three" width={200} height={200} />
          </div>  
          <div className={styles.card}>
            <Image src="/unsplash_four.jpg" alt="unsplash_four" width={200} height={200} />
          </div>  
        </div>
      </main>
    </>
  )
}
