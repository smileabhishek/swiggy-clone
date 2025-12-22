import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App({ id }) {
    return (
        <div id={id}>
            <Header className="site-header" />
            <h1>Welcome to Swiggy Clone</h1>
            <Footer className="site-footer" />
        </div>
    );
}
export default App;
