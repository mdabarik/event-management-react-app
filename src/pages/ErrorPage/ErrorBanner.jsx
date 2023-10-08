
import { Navigate, useNavigate } from "react-router-dom";
import SeminarImg from "../../assets/webinar-bg.jpg";
import EventBg from '../../components/EventBanner/EventBg';

const ErrorBanner = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[66vh] w-[100vw] flex items-center justify-center">
            <EventBg image={SeminarImg}></EventBg>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">
                    Oops! Page Not Found (404 Error)
                </h2>
                <p className="text-[10px] md:text-xl w-[60%] md:w-[60%] text-center  font-thin text-white my-4">
                    Exploring Uncharted Digital Territory: Lost in the Web Wilderness. Let's Guide You Back Home.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 block select-none rounded-lg bg-[#db332a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="submit"
                >
                    Go Back
                </button>
            </div>

        </div>
    );
};

export default ErrorBanner;
