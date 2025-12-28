import styles from "./RestaurantCard.module.css";
import StoreRatingIcon from "../icons/StoreRatingIcon";
const BULLET_POINT = "\u2022";
export default function RestaurantCard({ className }) {
    return (
        <div
            className={`restaurant-card ${styles.restaurantCard} ${className}`}
        >
            <a href="/restaurant" className={styles.cardLink}>
                <div className={styles.cardGrid}>
                    <div className={styles.cardImageContainer}>
                        <img
                            className={`${styles.cardImg}`}
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/3fa8d5d2-9c38-46ad-b01a-e19a8760c826_1126162.jpg"
                            alt=""
                        />
                        <div className={`${styles.offersText}`}>50% Off</div>
                    </div>
                    <div className={`${styles.cardInfo}`}>
                        <div className={`${styles.restaurantName}`}>
                            Domino's Pizza
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
                                    4.3{` ${BULLET_POINT} `}
                                </span>
                                20&#45;35 mins
                            </div>
                        </div>
                        <div
                            className={`${styles.restaurantCardDiscriptionContainer}`}
                        >
                            <div className={`${styles.restaurantCousineText}`}>
                                Pizza, Fast Food
                            </div>
                            <div className={`${styles.restaurantLocationText}`}>
                                HSR, Banglore
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
