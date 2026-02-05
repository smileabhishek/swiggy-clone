import MenuCard from "../MenuCard/MenuCard";
const MenuAccordion = ({ menuCategory }) => {
    // we need to check if the menuCategory has the expected structure before trying to access its properties. If the structure is different, we can return a fallback UI or an empty div.
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
