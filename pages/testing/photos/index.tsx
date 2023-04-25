import Image from "next/image";
import styles from "@root/styles/Photos.module.css";

export default function PhotosPage() {
  return (
    <>
      <h1>Photos Page</h1>
      <div className={styles.flex}>
        <div className={styles.card}>
          <Image
            src="/unsplash_one.jpg"
            alt="unsplash_one"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_two.jpg"
            alt="unsplash_two"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_three.jpg"
            alt="unsplash_three"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_four.jpg"
            alt="unsplash_four"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_one.jpg"
            alt="unsplash_one"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_two.jpg"
            alt="unsplash_two"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_three.jpg"
            alt="unsplash_three"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_four.jpg"
            alt="unsplash_four"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_one.jpg"
            alt="unsplash_one"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_two.jpg"
            alt="unsplash_two"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_three.jpg"
            alt="unsplash_three"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_four.jpg"
            alt="unsplash_four"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_two.jpg"
            alt="unsplash_two"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_three.jpg"
            alt="unsplash_three"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/unsplash_four.jpg"
            alt="unsplash_four"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
