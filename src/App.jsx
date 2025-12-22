import Header from "./components/Header/Header.jsx";
function App({ id }) {
    return (
        <div id={id}>
            <Header className="site-header" />
            <h1>Welcome to Swiggy Clone</h1>
        </div>
    );
}
export default App;
