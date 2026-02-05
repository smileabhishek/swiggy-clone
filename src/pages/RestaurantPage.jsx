import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import MenuAccordion from "../components/MenuAccordion/MenuAccordion";
const RestaurantPage = () => {
    const { id: restaurantId } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);
    // console.log(MENU_API_URL + restaurantId);
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
    if (!restaurantData) {
        return <div>Loading...</div>;
    }
    const menuData =
        restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards;
    // console.log(restaurantData);

    // console.log(menuData);
    return (
        <div>
            {restaurantId} Page
            {menuData && menuData.length > 0 ? (
                menuData.map((menuCategory, index) => {
                    // console.log(menuCategory);
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
