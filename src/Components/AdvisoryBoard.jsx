/* import { Swiper , SwiperSlide} from 'swiper/react'; */
// Import Swiper styles
/* import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'; */

import Card from "./Card";

// import required modules
//import { EffectCoverflow, Pagination } from 'swiper/modules';
const AdvisoryBoard = () => {
  return (
    <div className=" max-w-screen-xl mx-auto py-[10em] px-[1em]">
      <h1 className="text-5xl font-bold text-gray-900 mb-5">Our Team</h1>
      <hr className="w-28 h-1 bg-green-900 mb-10" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
        {/*     <Swiper  effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">

         <SwiperSlide><Card></Card></SwiperSlide>
         <SwiperSlide><Card></Card></SwiperSlide>
         <SwiperSlide><Card></Card></SwiperSlide>
         <SwiperSlide><Card></Card></SwiperSlide>
   </Swiper> 
 */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
