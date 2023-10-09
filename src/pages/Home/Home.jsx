import "./Home.css";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Banner from '../../components/Banner/Banner';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        AOS.init()
    }, [])

    useEffect(() => {
        fetch("../../services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch()
    }, [])

    return (
        <>
            <div data-aos="flip-up" className='w-[100vw] h-[85vh] absolute top-0 left-0 -z-10'>


                <Swiper
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
                        services?.map(card => {
                            return <SwiperSlide key={card.id}>
                                <Banner card={card}> </Banner>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>

            <div className='mt-[88vh] mx-auto container w-[100vw]'>
                <UpcomingEvents></UpcomingEvents>
            </div>

            <div className='w-[100vw] mx-auto'>
                <Services></Services>
            </div>

            <div className='w-[100vw] mx-auto'>
                <Testimonials></Testimonials>
            </div>
            <div data-aos="zoom-in">
                <Footer></Footer>
            </div>
        </>
    )
};

export default Home;

