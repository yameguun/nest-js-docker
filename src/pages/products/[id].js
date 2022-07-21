import Link from 'next/link'

export default ({ post }) => {
  return (
    <div>
      <h1>{post.name}</h1>
      <Link href="/about2">
        <a>Back</a>
      </Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const products = await fetch(`${process.env.URL}`).then(data => data.json());
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString()
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
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