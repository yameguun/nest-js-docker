import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useCallback } from "react"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.jsで作ったサイト</title>
        <meta name="description" content="割と頑張った。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.jsで作ったサイト
        </h1>

        <div className={styles.about}>
          <Link href="/about">About Page SSR</Link>
        </div>

        <div className={styles.about}>
          <Link href="/about2">About Page SSG</Link>
        </div>

        <div className={styles.about}>
          <a href="/api/download" download="sample.html">ファイルダウンロード</a>
        </div>
      </main>
    </div>
  )
}
