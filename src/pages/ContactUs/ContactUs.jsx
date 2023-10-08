import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import ContactMember from "./ContactMember";
import ContactUsBanner from "./ContactUsBanner";
import AOS from 'aos';

const AboutUs = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        AOS.init();
        fetch("https://raw.githubusercontent.com/mdabarik/json-data-store/main/team.json")
            .then(res => res.json())
            .then(data => {
                setMembers(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div data-aos="flip-down">
            <div>
                <ContactUsBanner></ContactUsBanner>
            </div>
            <div className="container mx-auto w-[90%] md:[100%] flex items-center justify-center flex-col mt-[50px]">
                <h2 className="font-semibold w-full text-center text-xl md:text-2xl lg:text-3xl">Connect With Our <span className="text-[#db332a]">Team Members</span></h2>
                <p className="text-[8px] md:text-sm w-[80%] flex items-center justify-center my-3 text-center">Connect with Our Team: Building Relationships, One Conversation at a Time</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        members.map(member => <ContactMember key={member.id} member={member}></ContactMember>)
                    }
                </div>
            </div>
            <div className="mt-[10vh] w-[100vw]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;