import SearchIcon from "../components/Icons/SearchIcon";
import OffersIcon from "../components/Icons/OffersIcon";
import HelpIcon from "../components/Icons/HelpIcon";
import ProfileIcon from "../components/Icons/ProfileIcon";
import CartIcon from "../components/Icons/CartIcon";
export const NAV_ITEMS = [
    {
        id: "search",
        label: "Search",
        Icon: SearchIcon,
        href: "/search",
    },
    {
        id: "offers",
        label: "Offers",
        Icon: OffersIcon,
        href: "/offers",
    },
    {
        id: "help",
        label: "Help",
        Icon: HelpIcon,
        href: "/help",
    },
    {
        id: "profile",
        label: "Sign In",
        Icon: ProfileIcon,
        href: "/login",
    },
    {
        id: "cart",
        label: "Cart",
        Icon: CartIcon,
        href: "/cart",
    },
];
