import "./homeEvent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomeEvent({ products }) {
  return (
    <div className="homeEvent">
      <Swiper
        className="homeEventswiper"
        spaceBetween={20}
        initialSlide={0}
        centeredSlides={false}
        slidesPerView={2}
      >
        {products.map((product) => (
          <SwiperSlide id={product.id}>
            <div className="homeEventItem">
              <img src={product.img} alt="" className="homeEventImg" />
              <span className="homeEventContent">{product.content}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
