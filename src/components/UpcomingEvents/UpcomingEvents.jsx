import { useEffect, useState } from "react";
import Card from "../Card/Card";

const UpcomingEvents = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("../events.json")
        .then(res => res.json())
        .then(cards => {
            setCards(cards)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="container mx-auto mb-8">
            <h2 className="font-semibold w-full text-center text-3xl">Upcoming <span className="text-[#db332a]">Events</span></h2>
            <p className="text-sm mt-3 text-center">Join us for thrilling events! Live music, workshops, art exhibits, and more! Mark your calendars and don't miss out!</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;