import RestaurantCard from "../RestaurantCard/RestaurantCard";
import styles from "./RestaurantGrid.module.css";
const RestaurantGrid = () => {
    return (
        <div className="restaurant-grid">
            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className={styles.restaurantGridContainer}>
                <RestaurantCard className="restaurant-card-1" />
                <RestaurantCard className="restaurant-card-2" />
                <RestaurantCard className="restaurant-card-3" />
                <RestaurantCard className="restaurant-card-3" />
                <RestaurantCard className="restaurant-card-3" />
                <RestaurantCard className="restaurant-card-3" />
                <RestaurantCard className="restaurant-card-3" />
            </div>
        </div>
    );
};
export default RestaurantGrid;
