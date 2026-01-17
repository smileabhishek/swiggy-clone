import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";

function App({ id }) {
    return (
        <div id={id}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
