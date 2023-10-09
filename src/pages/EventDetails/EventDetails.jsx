import AOS from "aos";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventBanner from "../../components/EventBanner/EventBanner";
import Footer from "../../components/Footer/Footer";
import 'aos/dist/aos.css';

const EventDetails = () => {
    const [cardInfo, setCardInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        AOS.init()
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
            <div data-aos="zoom-in">
            <EventBanner card={cardInfo}></EventBanner>
            </div>
            <div data-aos="zoom-in" className="mt-[18px] w-[90%] lg:w-[100%] container mx-auto">
                <p className="text-[12px] md:text-sm">
                {
                    cardInfo.eventDetails
                }
                </p>
            </div>
            <div data-aos="zoom-in" className="mt-[30px] w-[100vw]">
                <Footer></Footer>
            </div>
        </>
    );
};

export default EventDetails;