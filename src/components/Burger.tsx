import styles from "../styles/Burger.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Burger = ({ isOpen, setIsOpen }: Props) => {
  return (
    <button className={styles.btnBurger} onClick={() => setIsOpen(!isOpen)}>
      <div
        className={styles.line}
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
      ></div>
      <div
        className={styles.line}
        style={{
          transform: isOpen ? "translateX(20px)" : "translateX(0)",
          opacity: isOpen ? "0" : "1",
        }}
      ></div>
      <div
        className={styles.line}
        style={{ transform: isOpen ? "rotate(-45deg)" : "rotate(0)" }}
      ></div>
    </button>
  );
};
