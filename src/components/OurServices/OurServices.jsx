import { useEffect } from 'react';

const OurServices = () => {
    return (
        <div className="w-[90%] md:w-[100%] my-8">
            <h2 className="font-semibold w-full text-center text-3xl">Our <span className="text-[#db332a]">Services</span></h2>
            <p className="text-sm mt-3 text-center">Join us for thrilling events! Live music, workshops, art exhibits, and more! Mark your calendars and don't miss out!</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    // cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default OurServices;