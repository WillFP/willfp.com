import { FC } from "react";
import styles from '../styles/Header.module.scss'

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <img src={require("../styles/assets/auxilor.jpeg")} alt="Auxilor Logo"/>

            <div className={styles.right}>
                <a href="/projects" className={styles.link}>Projects</a>
                <a href="/contact" className={styles.link}>Contact</a>
            </div>
        </div>
    )
}

export default Header;