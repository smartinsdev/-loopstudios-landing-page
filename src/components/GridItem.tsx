import Image, { StaticImageData } from "next/image";

import styles from "../styles/GridItem.module.css";

type Props = {
  src: StaticImageData;
  title: string;
  breakLine?: boolean
};
export const GridItem = ({ src, title, breakLine }: Props) => {
  const newTitle = breakLine ? title.split(" ") : title 
  return (
    <div className={styles.image}>
      <Image src={src} layout="responsive" objectFit="contain" alt={title} />
      { breakLine ? 
        <span className={styles.titleImage}>{newTitle[0]}<br />{newTitle[1]}</span> :
        <span className={styles.titleImage}>{newTitle}</span>
      }
      <div className={styles.gradientBg}></div>
    </div>
  );
};
