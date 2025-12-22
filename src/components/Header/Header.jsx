import SwiggyIcon from "../icons/SwiggyIcon";
import { NAV_ITEMS } from "../../config/navigation";
import styles from "./header.module.css";

function Header({ className }) {
    return (
        <header className={`${styles.header} ${className ?? ""}`}>
            <nav className={styles.navBar}>
                <div>
                    <SwiggyIcon size={50} />
                </div>

                <ul className={styles.navList}>
                    {NAV_ITEMS.map(({ id, label, Icon, href }) => (
                        <li key={id} className={styles.navItems}>
                            <a href={href} className={styles.navItemContainer}>
                                <span>
                                    <Icon size={24} aria-hidden="true" />
                                </span>
                                <span className={styles.navItemsText}>
                                    {label}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;
