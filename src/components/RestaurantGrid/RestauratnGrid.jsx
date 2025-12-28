import RestaurantCard from "../RestaurantCard/RestaurantCard";
import styles from "./RestaurantGrid.module.css";
import restaurantsList from "../../assets/restaurantData.json";
const RestaurantGrid = () => {
    const restaurantList =
        restaurantsList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
    return (
        <div className="restaurant-grid">
            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className={styles.restaurantGridContainer}>
                {restaurantList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurantData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};
export default RestaurantGrid;
