
import webinarBg from '../../assets/webinar-bg.jpg';
import workshopBg from '../../assets/workshop-bg.jpg';
import BgImage from "../../components/BgImage/BgImage";
import "./Home.css";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WebinarBanner from '../../components/WebinarBanner/WebinarBanner';
import WorkshopBanner from '../../components/WorkshopBanner/WorkshopBanner';


const Home = () => {
    return (
        <div className='w-[100vw] h-[85vh] absolute top-0 left-0 -z-10'>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay= {{
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
                    <BgImage image={webinarBg}></BgImage>
                </SwiperSlide>
                <SwiperSlide>
                    <WorkshopBanner image={workshopBg}></WorkshopBanner>
                </SwiperSlide>
                <SwiperSlide>
                    <WebinarBanner image={webinarBg}></WebinarBanner>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    )
};

export default Home;

