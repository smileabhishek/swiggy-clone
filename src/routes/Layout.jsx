import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Header className="site-header" />
            <Main className="site-main">
                <Outlet />
            </Main>
            <Footer className="site-footer" />
        </>
    );
};
export default Layout;
