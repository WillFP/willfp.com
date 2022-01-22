import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import { Heading } from '@chakra-ui/react'
import Head from 'next/head'
import IndexContent from '../components/IndexContent'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will FP</title>
      </Head>

      <Header/>
      <IndexContent/>
    </div>
  )
}

export default Home
