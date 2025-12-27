import styles from "./Main.module.css";
export default function Main({ children, className }) {
    return (
        <main className={`${styles.main} ${className ?? ""}`}>{children}</main>
    );
}
