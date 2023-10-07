import { MdDateRange } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Card = ({ card }) => {
    return (
        <div className="bg-[#ebe5e5] m-2 pb-6 rounded-lg flex flex-col justify-between">
            <div className="">
                <img className="rounded-t-lg h-[250px] w-full object-cover" src={card.image} alt="image" />
                <div className="flex justify-between items-center">
                    <span>{card.type}</span>
                    <span>{card.price}</span>
                </div>
            </div>
            <div className="px-4">
                <h2 className="font-semibold my-1">{card.name}</h2>
                <div className="flex justify-between">
                    <p className="rounded-full bg-[#df1f15d9] text-sm px-4 py-2 text-white">{card.type}</p>
                    <div className="flex flex-row-reverse items-center">
                        <MdDateRange className="text-xl"></MdDateRange>
                        <span className="text-sm">{ card.eventDate }</span>
                    </div>
                </div>
                <div className="flex items-center my-2">
                    <ImLocation2 className="text-xl"></ImLocation2>
                    <span className="text-sm">{card.location}</span>
                </div>
                <div>
                    <p>
                        {
                            card.shortDescription.slice(0, 78)
                        }
                    </p>
                </div>
            </div>
            <div className="px-6 py-2">
                <button className="btn w-full btn-secondary rounded-lg bg-[#db332adc] hover:bg-[#db332a]">{card.button.label}</button>
            </div>
        </div>
    );
};

export default Card;