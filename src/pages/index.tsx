import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header, About, Product, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" /> 
        <title>Frontend Mentor | Loopstudios landing page</title>
        <meta name="description" content="This is a solution to the Loopstudios landing page challenge on Frontend Mentor" />
      </Head>
      <Header />
      <main>
        <About />
        <Product />
      </main>
      <Footer />
    </div>
  )
}

export default Home
