
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odyssee Sud</title>
        <meta name="description" content="Explore the world at your own pace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Explore the world at your own pace</h1>
        <p className={styles.description}>Book flights, discover destinations, and travel smart with Odyssée Sud.</p>
        <div className={styles.buttons}>
          <button className={styles.cta}>Europe</button>
          <button className={styles.cta}>Rest of the World</button>
        </div>
      </main>
    </div>
  )
}
