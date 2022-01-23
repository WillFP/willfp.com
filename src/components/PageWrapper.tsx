import { FC } from "react";
import Head from 'next/head'
import ThemeToggle from './ThemeToggle'
import NavbarLink from "./NavbarLink";

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

                {props.children}
            </div>
        </div >
    )
}

export default PageWrapper