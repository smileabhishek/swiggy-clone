import RestaurantCard from "../RestaurantCard/RestaurantCard";
import styles from "./RestaurantGrid.module.css";
// import restaurantsList from "../../assets/restaurantData.json";
import { useState, useEffect } from "react";
import { RestaurantApi_URL } from "../../utils/constants";
const RestaurantGrid = () => {
    // swiggy API call
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(RestaurantApi_URL);
            const data = await res.json();
            setRestaurants(
                data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants
            );
        }
        fetchData();
    }, []);
    // static data from json file
    // const [restaurants, setRestaurants] = useState(restaurantsList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //                     ?.restaurants);
    return (
        <div className="restaurant-grid">
            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className={styles.restaurantGridContainer}>
                {/* {restaurantsList.map((restaurant) => ( */}
                {restaurants.map((restaurant) => (
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
