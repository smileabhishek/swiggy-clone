import styles from "./RestaurantCard.module.css";
import StoreRatingIcon from "../icons/StoreRatingIcon";
import { Link } from "react-router-dom";
import { IMG_URL, FALLBACK_IMG } from "../../utils/constants";
const BULLET_POINT = "\u2022";
export default function RestaurantCard({ className, restaurantData }) {
    const restaurantInfo = restaurantData?.info;
    return (
        <div
            className={`restaurant-card ${styles.restaurantCard} ${className}`}
        >
            <Link
                to={`/restaurants/restaurant/${restaurantInfo?.id}`}
                className={styles.cardLink}
            >
                <div className={styles.cardGrid}>
                    <div className={styles.cardImageContainer}>
                        <img
                            className={`${styles.cardImg}`}
                            src={IMG_URL + restaurantInfo?.cloudinaryImageId}
                            alt={restaurantInfo?.name ?? "restaurant"}
                            onError={(e) => {
                                const img = e.currentTarget;
                                if (!img.dataset.fallback) {
                                    img.src = FALLBACK_IMG;
                                    img.dataset.fallback = "true";
                                }
                            }}
                        />
                        <div className={`${styles.offersText}`}>
                            {(restaurantInfo?.aggregatedDiscountInfoV3
                                ?.header ?? "") +
                                " " +
                                (restaurantInfo?.aggregatedDiscountInfoV3
                                    ?.subHeader ?? "")}
                        </div>
                    </div>
                    <div className={`${styles.cardInfo}`}>
                        <div className={`${styles.restaurantName}`}>
                            {restaurantInfo?.name}
                        </div>
                        <div
                            className={`${styles.restaurantCardSubtextContainer}`}
                        >
                            <div>
                                <StoreRatingIcon />
                            </div>
                            <div className={`${styles.restaurantCardSubtext}`}>
                                <span
                                    className={`${styles.restaurantRatingText}`}
                                >
                                    {restaurantInfo?.avgRatingString}
                                    {` ${BULLET_POINT} `}
                                </span>
                                {restaurantInfo?.sla?.slaString}
                            </div>
                        </div>
                        <div
                            className={`${styles.restaurantCardDiscriptionContainer}`}
                        >
                            <div className={`${styles.restaurantCousineText}`}>
                                {restaurantInfo?.cuisines?.join(", ") || ""}
                            </div>
                            <div className={`${styles.restaurantLocationText}`}>
                                {restaurantInfo?.locality}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
