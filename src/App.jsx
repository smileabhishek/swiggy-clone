import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import RestaurantGrid from "./components/RestaurantGrid/RestauratnGrid.jsx";
function App({ id }) {
    return (
        <div id={id}>
            <Header className="site-header" />
            <Main className="site-main">
                <RestaurantGrid />
            </Main>
            <Footer className="site-footer" />
        </div>
    );
}
export default App;
