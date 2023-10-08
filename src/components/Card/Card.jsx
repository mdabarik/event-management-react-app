import { MdDateRange } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BiSolidTime } from "react-icons/bi";

const Card = ({ card }) => {
    return (
        <div className="bg-[#ebe5e5] m-2 rounded-lg flex flex-col justify-between">
            <div className="relative mb-4">
                <img className="rounded-t-lg h-[250px] w-full object-cover" src={card.image} alt="image" />
                <div className="flex justify-between items-center w-full absolute bottom-3">
                    <span className="ml-4 bg-[#161515a7] text-white rounded-full px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg">{card.duration}</span>
                    <span className="bg-[#ffffffd9] rounded-full px-2 md:px-4 py-1 md:py-2 mr-4 text-sm md:text-lg">Price: {card.price}</span>
                </div>
            </div>
            <div className="px-4">
                <div className="flex justify-between">
                    <p className="rounded-full bg-[#df1f15d9] text-[12px] md:text-sm px-2 md:px-4 py-1 md:py-2 text-white">{card.type}</p>
                    <div className="flex items-center md:my-2">
                        <ImLocation2 className="text-xl md:text-2xl mr-1"></ImLocation2>
                        <span className="text-[12px] md:text-sm">{card.location}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center my-4">
                    <div className="flex items-center">
                        <MdDateRange className="text-xl"></MdDateRange>
                        <span className="text-[12px] md:text-sm ml-1">{card.eventDate}</span>
                    </div>
                    <div className="flex flex-row-reverse justify-center items-center">
                        <BiSolidTime className="text-2xl"></BiSolidTime>
                        <span className="text-[12px] md:text-sm">{card.time}</span>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-[14px] md:text-[20px] my-2">{card.name}</h2>
                    <p className="text-[12px] md:text-sm">
                        {
                            card.shortDescription.slice(0, 78)
                        }
                    </p>
                </div>
            </div>
            <div className="px-4 mb-5 py-2">
                <button className="py-1 md:py-2 text-sm md:text-lg w-full btn-secondary rounded-lg bg-[#db332adc] hover:bg-[#db332a]">{card.button.label}</button>
            </div>
        </div>
    );
};

export default Card;