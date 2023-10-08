import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ErrorBanner from "./ErrorBanner";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <ErrorBanner></ErrorBanner>
            </div>
            <p className="text-3xl text-center">Page not found!!!!</p>
            <div className="mt-[10vh] w-[100vw]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;