import { FC } from "react";
import Head from 'next/head'
import ThemeToggle from './ThemeToggle'
import NavbarLink from "./NavbarLink";
import Image from 'next/image'

const PageWrapper: FC<{}> = props => {
    return (
        <div className='flex flex-col h-screen'>
            <Head>
                <title>Will FP</title>
            </Head>

            <div className='container mx-auto pl-4 py-4 flex flex-col'>
                <div className="basis-1/4">
                    <div className='pl-10 pt-10 flex flex-row'>
                        <div className="mt-2">
                            <Image
                                width={64}
                                height={64}
                                className="object-contain w-64 h-64 rounded-full relative"
                                src={require('../public/auxilor.jpeg')}
                                alt="Auxilor Logo"
                            />
                        </div>
                        <div className='ml-6 flex flex-col'>
                            <a href="../">
                                <h1 className='text-5xl font-sans font-bold'>I&apos;m Will FP.</h1>
                            </a>
                            <h3 className='text-2xl font-sans font-extralight'>I&apos;m a full-stack developer.</h3>
                        </div>
                    </div>
                </div>

                <div className='pl-10 py-4 basis-3/4'>
                    <div className='container mx-auto py-4 flex flex-row'>
                        <div className='basis-1/12'>
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
                                    <ThemeToggle />
                                </li>
                            </ul>
                        </div>

                        <div className='ml-10 basis-11/12'>
                            {props.children}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PageWrapper