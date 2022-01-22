import { FC } from "react";
import styles from '../styles/Header.module.scss'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <h1 className="text-2xl font-bold">Will FP</h1>

            <div className={styles.right}>
                <a href="/projects" className={styles.link}>Projects</a>
                <a href="/contact" className={styles.link}>Contact</a>
            </div>
        </header>
    )
}

export default Header;