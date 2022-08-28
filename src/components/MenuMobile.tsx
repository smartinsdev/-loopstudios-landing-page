import { NavItems } from "./NavItems"
import styles from "../styles/MenuMobile.module.css"

type Props = {
    isOpen: boolean
}

export const MenuMobile = ({ isOpen }: Props) => (
    <div 
        className={styles.wrapMenu}
        style={{transform: isOpen? 'translateX(0)' : 'translateX(-100%)'}}
    >
        <NavItems />
    </div>
)