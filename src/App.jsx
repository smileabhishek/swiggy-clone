import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
function App({ id }) {
    return (
        <div id={id}>
            <Header className="site-header" />
            <Main className="site-main">
                <h1>Welcome to Swiggy Clone</h1>
            </Main>
            <Footer className="site-footer" />
        </div>
    );
}
export default App;
