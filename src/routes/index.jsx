import RestaurantGrid from "../components/RestaurantGrid/RestauratnGrid";
import Layout from "./layout.jsx";
import { createBrowserRouter, Navigate } from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/restaurants" replace />,
    },
    {
        path: "/restaurants",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <RestaurantGrid />,
            },
            {
                path: ":id",
                element: <div>Restaurant Details Page</div>,
            },
        ],
    },
]);
