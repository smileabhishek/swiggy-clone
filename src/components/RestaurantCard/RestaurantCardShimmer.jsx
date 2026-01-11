import styles from "./RestaurantCardShimmer.module.css";
export default function RestaurantCardShimmer({ className }) {
    return (
        <div
            className={`restaurant-card ${styles.RestaurantCardShimmer} ${className}`}
        ></div>
    );
}
