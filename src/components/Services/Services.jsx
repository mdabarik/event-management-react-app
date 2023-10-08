import { Swiper, SwiperSlide } from "swiper/react";
import "./Services.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mdabarik/json-data-store/main/services.json")
            .then(res => res.json())
            .then(services => {
                setServices(services);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container w-[90%] md:w-[100%] mx-auto">
            <div className="mt-8 flex flex-col items-center justify-center w-[100%]">
                <h2 className="font-semibold w-full text-center text-xl md:text-2xl lg:text-3xl">Our <span className="text-[#db332a]">Services</span></h2>
                <p className="text-[8px] md:text-sm flex my-3 text-center">Empowering Growth and Learning Across Industries: <br /> Explore Our Diverse Range of Services</p>
            </div>
            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={16}
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