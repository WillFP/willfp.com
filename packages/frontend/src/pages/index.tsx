import type { NextPage } from 'next'
import PageWrapper from '../components/PageWrapper'

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <h1 className='text-3xl font-sans font-extrabold'>Hi!</h1>
      <p className='font-sans font-light'>
        I&apos;m a Java, Kotlin, JavaScript, and TypeScript developer from the UK.
        <br />
        I&apos;ve been coding for over 2 years, mostly in the world of spigot.
      </p>
    </PageWrapper>
  )
}

export default Home
