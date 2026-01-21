import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const RestaurantPage = () => {
    const { id: restaurantId } = useParams();
    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        if (!restaurantId) return;

        const fetchMenu = async () => {
            try {
                const res = await fetch(`${MENU_API_URL}${restaurantId}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setRestaurantData(data.data.cards[2].card.card.info);
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();
    }, [restaurantId]);
    if (!restaurantData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {restaurantData.name} - {restaurantId} Page
        </div>
    );
};

export default RestaurantPage;
