import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import ConferenceBanner from "./ConferenceBanner";

const Conferences = () => {
    const [conferences, setConferences] = useState([])
    useEffect(() => {
        fetch("../events.json")
            .then(res => res.json())
            .then(data => {
                const filer = data.filter(conf => conf.type == "Conference");
                setConferences(filer);
                console.log(filer);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <div data-aos="zoom-in">
                <ConferenceBanner></ConferenceBanner>
            </div>
            <div data-aos="zoom-in" className="container mx-auto w-[90%] md:[100%] flex items-center justify-center flex-col mt-[50px]">
                <h2 className="font-semibold w-full text-center text-xl md:text-2xl lg:text-3xl">Our Available <span className="text-[#db332a]">Conferences</span></h2>
                <p className="text-[8px] md:text-sm w-[80%] flex items-center justify-center my-3 text-center">Connect with Our Team: Building Relationships, One Conversation at a Time</p>
                <div className="grid grid-cols-1 gap-5">

                    {
                        conferences.map(card => <Card key={card.id} card={card}></Card>)
                    }

                </div>
            </div>
            <div data-aos="zoom-in" className="mt-[10vh] w-[100vw]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Conferences;