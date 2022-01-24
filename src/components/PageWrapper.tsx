import { FC } from "react";
import Head from 'next/head'
import ThemeToggle from './ThemeToggle'
import NavbarLink from "./NavbarLink";
import Image from 'next/image'
import Link from 'next/link'

const PageWrapper: FC = props => {
    return (
        <div className='container flex flex-row min-h-screen'>
            <Head>
                <title>Will FP</title>
            </Head>

            <div className="basis-1/12 text-center px-16 bg-gray-500/5 drop-shadow-sm h-100">
                <div className="sticky top-12">
                    <div className="my-2">
                        <Link href="../" passHref={true}>
                            <Image
                                width={64}
                                height={64}
                                className="object-contain w-64 h-64 rounded-full relative hover:cursor-pointer"
                                src={require('../public/auxilor.jpeg')}
                                alt="Auxilor Logo"
                            />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <NavbarLink name="Home" link="../" />
                        </li>
                        <li>
                            <NavbarLink name="Projects" link="projects" />
                        </li>
                        <li>
                            <NavbarLink name="Contact" link="contact" />
                        </li>
                        <li>
                            <ThemeToggle className="mt-5" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className='py-10 pl-12 basis-11/12'>
                <div className='flex flex-col'>
                    <h1 className='text-5xl font-sans font-bold'>I&apos;m Will FP.</h1>
                    <h3 className='text-2xl font-sans font-extralight mb-6'>I&apos;m a full-stack developer.</h3>
                </div>
                {props.children}
            </div>
        </div >
    )
}

export default PageWrapper