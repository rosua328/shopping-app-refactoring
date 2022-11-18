import HomeListSwipe from "../../homeWidget/homeListSwipe/HomeListSwipe";
import HomeSailProduct from "../../homeWidget/homeSailProduct/HomeSailProduct";
import HomeSlide from "../../homeWidget/homeSlide/HomeSlide";
import "./home.css";
import { products, newProducts, event } from "../../../dummyData";
import HomeEvent from "../../homeWidget/homeEvent/HomeEvent";
import HomeCollection from "../../homeWidget/homeCollection/HomeCollection";

export default function Home() {
  return (
    <div className="home">
      <HomeSlide />
      <div className="homeTitle">베스트</div>
      <HomeListSwipe products={products} />
      <HomeEvent products={event} />
      <div className="homeTitle">핫세일</div>
      <HomeSailProduct />
      <div className="homeTitle">신상품</div>
      <HomeListSwipe products={newProducts} />
      <HomeCollection products={newProducts} />
    </div>
  );
}
