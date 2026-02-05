import { IMG_URL } from "../../utils/constants";
const MenuCard = ({ foodItem }) => {
    return (
        <div className="menuItemCard">
            <div className="menuItemDetails">
                <div>
                    <div>{foodItem.name}</div>
                    <div>{foodItem.price / 100}</div>
                    <div>{foodItem.description}</div>
                </div>
            </div>
            <div className="menuItemImg">
                <img alt="Margherita" src={IMG_URL + foodItem.imageId} />
                <div>
                    <button>Add</button>
                    <div>Customisable</div>
                </div>
            </div>
        </div>
    );
};
export default MenuCard;
