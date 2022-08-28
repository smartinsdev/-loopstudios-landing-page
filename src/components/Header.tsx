import { useState } from "react";
import Image from "next/image";

import logo from "../../public/logo.svg";

import styles from "../styles/Header.module.css";
import { Burger } from "./Burger";
import { MenuMobile } from "./MenuMobile";
import { NavItems } from "./NavItems";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.hero}>
      <nav className={styles.navBar}>
        <div className={styles.brand}>
          <Image src={logo} layout="fill" objectFit="contain" alt="Logo loopstudios" />
        </div>
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={styles.navItens}>
          <NavItems />
        </div>
      </nav>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Immersive experiences that deliver</h1>
      </div>
      <MenuMobile isOpen={isOpen} />
    </header>
  );
};
