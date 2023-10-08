import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventBanner from "../../components/EventBanner/EventBanner";

const EventDetails = () => {
    const [cardInfo, setCardInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("../events.json")
            .then(res => res.json())
            .then(cards => {
                const filter = cards.find(card => card.id == params.id);
                setCardInfo(filter)
            })
            .catch()
    }, [])


    return (
        <>
            <EventBanner card={cardInfo}></EventBanner>
            <div className="mt-[18px] w-[90%] lg:w-[100%] container mx-auto">
                <p className="text-[12px] md:text-sm">
                {
                    cardInfo.eventDetails
                }
                </p>
            </div>
        </>
    );
};

export default EventDetails;