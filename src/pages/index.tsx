import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import ThemeToggle from '../components/ThemeToggle'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>Will FP</title>
      </Head>

      <div className='container mx-auto px-4 py-4'>
        <div className='px-10 py-10'>
          <h1 className='text-5xl font-sans font-bold'>I'm Will FP.</h1>
          <h3 className='text-2xl font-sans font-extralight'>I'm a full-stack developer.</h3>
        </div>

        <div className='px-10'>
          <ul>
            <li>
              <a href="/projects" className='hover:font-bold transition duration-200 border-b-4 border-transparent hover:border-teal-500'>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className='hover:font-bold transition duration-200 border-b-4 border-transparent hover:border-teal-500'>
                Contact
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
