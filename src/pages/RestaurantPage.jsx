import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import MenuAccordion from "../components/MenuAccordion/MenuAccordion";
const RestaurantPage = () => {
    const { id: restaurantId } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);

    // Fetch the restaurant menu data when the component mounts or when the restaurantId changes
    useEffect(() => {
        if (!restaurantId) return;

        const fetchMenu = async () => {
            try {
                const res = await fetch(`${MENU_API_URL}${restaurantId}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setRestaurantData(data);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [restaurantId]);

    // we can also add a loading state to show a spinner or message while fetching data
    if (!restaurantData) {
        return <div>Loading...</div>;
    }
    // The menu data is nested deep within the restaurantData object, so we need to navigate through the structure to access it
    const menuData =
        restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards;

    return (
        <div>
            {restaurantId} Page
            {menuData && menuData.length > 0 ? (
                menuData.map((menuCategory, index) => {
                    return (
                        menuCategory && (
                            <MenuAccordion
                                key={index}
                                menuCategory={menuCategory}
                            />
                        )
                    );
                })
            ) : (
                <div>No menu data available.</div>
            )}
        </div>
    );
};

export default RestaurantPage;
