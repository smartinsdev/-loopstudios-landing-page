import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";
import logo from "../../public/logo.svg";
import { navItens } from "../constants/navItens";
import { listNetworks } from "../constants/listNetworks";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.brand}>
        <Image src={logo} layout="responsive" objectFit="contain" alt="logo loopstudios" />
      </div>
      <ul className={styles.itensGroup}>
        {navItens.map((item, index) => (
          <li key={index}>
            <Link href={item}>
              <a className={styles.link}>{item}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.networks}>
        { listNetworks.map((item, index) => (
            <div key={index} className={styles.icon}>
                <Image src={item} layout="fill" alt="icon networks" />
            </div>
        )) }
      </div>
      <p className={styles.copyright}>© 2021 Loopstudios. All rights reserved.</p>
      <div className={styles.attribution}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
        </div>
    </footer>
  );
};
