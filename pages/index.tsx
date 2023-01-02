import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>N8makes Things</title>
        <meta name="description" content="My personal playground." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="main">
        <h1>
          <Image src="/n8makes.svg" alt="N8makes" width={100} height={100} />
        </h1>
      </main>
    </div>
  )
}

export default Home
