import Image from "next/image";

import imgInteractive from "../../public/image-interactive.jpg";
import styles from "../styles/About.module.css";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={imgInteractive}
          layout="responsive"
          alt="This man with virtual reality glasses"
        />
        <div className={styles.content}>
          <h2 className={styles.titleContent}>The leader in interactive VR</h2>
          <p className={styles.paragraphContent}>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};
