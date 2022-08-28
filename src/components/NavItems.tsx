import Link from "next/link";
import styles from "../styles/NavItems.module.css";
import { navItens } from "../constants/navItens";

export const NavItems = () => {
  return (
    <ul className={styles.navGroup}>
      {navItens.map((item, index) => (
        <li key={index} className={styles.container}>
          <Link href={`${item.toLowerCase()}/`} target="_blank" rel="noreferrer">
            <a className={styles.link}>{item}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
