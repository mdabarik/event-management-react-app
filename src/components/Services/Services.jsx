import { Swiper, SwiperSlide } from "swiper/react";
import "./Services.css";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Scrollbar, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("../services.json")
            .then(res => res.json())
            .then(services => {
                setServices(services);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container mx-auto">
            <div className="mt-8">
                <h2 className="font-semibold w-full text-center text-3xl">Our <span className="text-[#db332a]">Services</span></h2>
                <p className="text-sm my-3 text-center">Empowering Growth and Learning Across Industries: <br /> Explore Our Diverse Range of Services</p>
            </div>
            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    services.map(service => {
                        return <SwiperSlide key={service.id}>
                            <Service service={service}></Service>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default Services;