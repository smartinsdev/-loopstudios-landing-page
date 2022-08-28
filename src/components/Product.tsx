import { useEffect, useState } from "react";

import styles from "../styles/Product.module.css";
import { GridItem } from "./GridItem";
import { ImageImport, listImagesDestop, listImagesMobile } from "../constants/listImages";
import Link from "next/link";

export const Product = () => {
  const [width, setWidth] = useState(0)

  const detectSize = () => {
    setWidth(window.innerWidth)
  }
  
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [width])

  const renderIten = (item: ImageImport, index: number) => {
    if (item.title.includes("grid")) {
      return (
        <GridItem
          key={index}
          src={item.src}
          title={item.title}
          breakLine
        />
      );
    }
    return <GridItem key={index} src={item.src} title={item.title} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our creations</h2>
      <div className={styles.grid}>
        { 
        width < 768  ? 
        listImagesMobile.map(renderIten) : 
        listImagesDestop.map(renderIten)
        }
      </div>
      <div className={styles.viewProduct}>
        <Link href="/product" target="_blank" rel="noreferrer">
          <a className={styles.link}>see all</a>
        </Link>
      </div>
    </div>
  );
};
