import MenuCard from "../MenuCard/MenuCard";
const MenuAccordion = ({ menuCategory }) => {
    console.log(menuCategory);
    // return <div>{menuCategory?.card?.card?.title ?? "Menu"}</div>;
    if (menuCategory.card === undefined) return <div></div>;
    return (
        <div>
            <div className="menuCategoryHeader">
                <button>{menuCategory?.card?.card?.title ?? "Menu"}</button>
            </div>
            {menuCategory?.card?.card?.itemCards?.length === 0 && (
                <div>No items available.</div>
            )}
            {menuCategory?.card?.card?.itemCards?.map((item, index) => {
                // if (!item.card || !item.card.card) return null;
                // console.log(item.card.info);
                return (
                    <MenuCard
                        key={item?.card?.info?.id ?? index}
                        foodItem={item?.card?.info}
                    />
                );
            })}
        </div>
    );
};
export default MenuAccordion;
