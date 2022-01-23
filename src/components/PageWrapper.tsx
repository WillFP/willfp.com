import { FC } from "react";
import Head from 'next/head'
import ThemeToggle from './ThemeToggle'
import Link from "next/link";

const PageWrapper: FC<{}> = props => {
    return (
        <div className='flex flex-col h-screen'>
            <Head>
                <title>Will FP</title>
            </Head>

            <div className='container mx-auto px-4 py-4'>
                <div className='px-10 py-10'>
                    <a href="../">
                        <h1 className='text-5xl font-sans font-bold'>I&apos;m Will FP.</h1>
                    </a>
                    <h3 className='text-2xl font-sans font-extralight'>I&apos;m a full-stack developer.</h3>
                </div>

                <div className='px-10'>
                    <ul>
                        <li>
                            <Link href="/projects">
                                <a className='hover:font-bold transition duration-200 border-b-4 border-transparent hover:border-teal-500'>
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className='hover:font-bold transition duration-200 border-b-4 border-transparent hover:border-teal-500'>
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>

                {props.children}
            </div>
        </div >
    )
}

export default PageWrapper