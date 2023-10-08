import Footer from "../Footer/Footer";
import EventBg from "./EventBg";
import Swal from "sweetalert2";

const EventBanner = ({ card }) => {
    const handleClickCTA = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks for booking this event.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
            <div className="h-[66vh] w-[100vw] flex items-center justify-center">
                <EventBg image={card.image}></EventBg>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">{card.name}</h2>
                    <p className="text-[10px] md:text-xl w-[80%] md:w-[80%] text-center  font-thin text-white my-4">{card.shortDescription}</p>
                    <button onClick={handleClickCTA} className="px-3 py-2 text-sm md:text-lg rounded-lg bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">Ready to Book?</button>
                </div>

            </div>
    );
};

export default EventBanner;