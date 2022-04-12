import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import eldenRingLogo from "./img/picture1.jpg"

const CarouselMain = () => {

    const generateSlider = () => {
        for (let i = 0; i < 3; i++) {
            return <SwiperSlide><img src={eldenRingLogo} id="carousel-img" /></SwiperSlide>
        }
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {generateSlider()}
            </Swiper>
        </>
    );
}

export default CarouselMain;