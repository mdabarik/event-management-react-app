import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BgImage = ({ image }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="zoom-in-up" className="border-red-600 w-[100vw] h-[85%] absolute top-0 -z-10">
            <img className="w-[100%] h-[100%] object-cover" src={image} alt="logo" />
            <div className="w-[100vw] h-[100%] border-2 border-orange-500 bg-[#00000070] absolute top-0 left-0 z-10"></div>
        </div>
    );
};

export default BgImage;