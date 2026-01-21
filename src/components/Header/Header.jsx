import SwiggyIcon from "../icons/SwiggyIcon";
import { NAV_ITEMS } from "../../config/navigation";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
function Header({ className }) {
    return (
        <header className={`${styles.header} ${className ?? ""}`}>
            <nav className={styles.navBar}>
                <div className={styles.logoLink}>
                    <Link to="/">
                        <SwiggyIcon size={50} />
                    </Link>
                </div>

                <ul className={styles.navList}>
                    {NAV_ITEMS.map(({ id, label, Icon, href }) => (
                        <li key={id} className={styles.navItems}>
                            <Link to={href} className={styles.navItemContainer}>
                                <span>
                                    <Icon size={24} aria-hidden="true" />
                                </span>
                                <span className={styles.navItemsText}>
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;
