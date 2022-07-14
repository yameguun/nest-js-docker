import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to MARUYAMA</title>
        <meta name="description" content="俺が世界の基準" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to MARUYAMA
        </h1>

        <div className={styles.about}>
          <Link href="/about">About Page SSR</Link>
        </div>

        <div className={styles.about}>
          <Link href="/about2">About Page SSG</Link>
        </div>

      </main>
    </div>
  )
}
