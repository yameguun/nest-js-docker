import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR</title>
        <meta name="description" content="ただのAboutページだよ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>おしゃれな食器とか（SSR）</h1>
        <div className={styles.parent}>
        {props.products.map((product)=>{
          return (
            <div className={styles.child} key={product.id}>
              <Image src={product.image} width={150} height={150} />
            </div>
          )
        })}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {
  const products = await fetch(`${process.env.URL}`).then(data => data.json());
  return {
    props: {
      products,
    }
  }
}