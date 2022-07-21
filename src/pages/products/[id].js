import Link from 'next/link'
import Head from 'next/head'

export default function Products({ post }) {
  return (
    <div>
      <Head>
        <title>{post.name}</title>
        <meta name="description" content="ただのAboutページだよ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{post.name}</h1>
      <Link href="/about2">
        <a>Back</a>
      </Link>
    </div>
  )
}

export async function getStaticPaths() {
  const products = await fetch(`${process.env.URL}`).then(data => data.json());
  const paths = products.map(product => {
    return {
      params: {
        id: product.id.toString()
      }
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = {
    id: params.id,
    name: "Product ID:" + params.id
  }
  return {
    props: {
      post
    },
  }
}