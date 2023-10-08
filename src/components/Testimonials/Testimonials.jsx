import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import AOS from 'aos';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        AOS.init();
        fetch("https://raw.githubusercontent.com/mdabarik/json-data-store/main/testimonials.json")
            .then(res => res.json())
            .then(testimonials => {
                setTestimonials(testimonials);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div data-aos="flip-down" className="container w-[90%] md:w-[100%] mx-auto">
            <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold w-full text-center text-xl md:text-2xl lg:text-3xl">Client <span className="text-[#db332a]">Testimonials</span></h2>
                    <p className="text-[8px] md:text-sm flex my-3 text-center">Discover What Our Clients Say: Real Stories, Real Experiences</p>
                </div>
            </div>
            <div className="mb-8">
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
                        testimonials.map(testimonial => {
                            return <SwiperSlide key={testimonial.id}>
                                <Testimonial testimonial={testimonial}></Testimonial>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;

