import "./homeCollection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomeCollection({ products }) {
  return (
    <div className="homeCollection">
      <div className="homeCollectionWrapper">
        <div className="homeCollectionLeft">
          <img
            src="https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="homeCollectionImg"
          />
        </div>
        <div className="homeCollectionRight">
          <div className="homeCollectionContainer">
            <span className="homeCollectionTitle">이번 겨울 베스트 컬렉션</span>
            <span className="homeCollectionContent">
              차가운 겨울 바람을 막아줄 그림과 함께 오늘도 돌아왔다. 이전에 구성
              못했던 것들을 더한 완벽한 컬렉션. 파란 색을 곁들여 시원한 느낌과
              털을 이용하여 따뜻한 느낌이 들게 하는 언벨런스.
            </span>
          </div>
          <Swiper
            className="homeCollectionSwipe"
            spaceBetween={10}
            initialSlide={0}
            centeredSlides={false}
            slidesPerView={4}
          >
            {products.map((product) => (
              <SwiperSlide id={product.id}>
                <div className="homeCollectionItem">
                  <img src={product.img} alt="" className="homeCollectionImg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
