
import webinarBg from '../../assets/webinar-bg.jpg';
import workshopBg from '../../assets/workshop-bg.jpg';
import "./Home.css";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WebinarBanner from '../../components/WebinarBanner/WebinarBanner';
import WorkshopBanner from '../../components/WorkshopBanner/WorkshopBanner';
import ContactUsBanner from '../../components/ContactUsBanner/ContactUsBanner';
import BlogBanner from '../../components/BlogBanner/BlogBanner';
import CareerFairBanner from '../../components/CareerFairBanner/CareerFairBanner';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';


const Home = () => {
    return (
        <>
            <div className='w-[100vw] h-[85vh] absolute top-0 left-0 -z-10'>
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
                    <SwiperSlide>
                        <WorkshopBanner image={workshopBg}></WorkshopBanner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <WebinarBanner image={webinarBg}></WebinarBanner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CareerFairBanner></CareerFairBanner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <BlogBanner></BlogBanner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContactUsBanner></ContactUsBanner>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='mt-[88vh]'>
                <UpcomingEvents></UpcomingEvents>
            </div>
            <div className='w-[100vw] mx-auto'>
                <Services></Services>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            <Footer></Footer>
        </>
    )
};

export default Home;

