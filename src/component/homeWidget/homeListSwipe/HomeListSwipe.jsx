import "./homeListSwipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomeListSwipe({ products }) {
  return (
    <div className="homeListSwipe">
      <Swiper
        className="swiper"
        spaceBetween={20}
        initialSlide={0}
        centeredSlides={false}
        slidesPerView={4}
      >
        {products.map((product) => (
          <SwiperSlide id={product.id}>
            <div className="swiperItem">
              <img src={product.img} alt="" className="swiperItemImg" />
              <div className="swiperDetailContainer">
                <span className="swiperDetailTitle">{product.title}</span>
                <span className="swiperDetailPrice">{product.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
