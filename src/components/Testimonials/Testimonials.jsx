import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Scrollbar, Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("../testimonials.json")
            .then(res => res.json())
            .then(testimonials => {
                console.log(testimonials);
                setTestimonials(testimonials);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <div className="mt-8">
                <h2 className="font-semibold w-full text-center text-3xl">Client <span className="text-[#db332a]">Testimonials</span></h2>
                <p className="text-sm my-3 text-center">Discover What Our Clients Say: Real Stories, Real Experiences</p>
            </div>
            <div className="mb-8">
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

