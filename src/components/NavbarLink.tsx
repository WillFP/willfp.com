import { FC } from 'react';
import Link from "next/link";

const NavbarLink: FC<{name: string, link: string}> = props => {
    return (
        <Link href={"/" + props.link}>
            <a className='hover:font-bold transition duration-200 border-b-2 border-transparent hover:border-teal-500'>
                {props.name}
            </a>
        </Link>
    )
}

export default NavbarLink