import "./homeSailProduct.css";

export default function HomeSailProduct() {
  return (
    <div className="homeSailProduct">
      <div className="homeSailProductLeft">
        <div className="homeSailProductSailContainer">
          <div className="homeSailProductNum">62</div>
          <div className="homeSailProductPercent">%</div>
        </div>
        <img
          src="https://images.pexels.com/photos/12874595/pexels-photo-12874595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="homeSailProductImg"
        />
      </div>
      <div className="homeSailProductRight">
        <span className="homeSailProductExplain">겨울 데일리룩의 정석</span>
        <div className="homeSailProductContentContainer">
          <span className="homeSailProductTitle">무스탕 재킷 카키 그레이</span>
          <span className="homeSailProductPrice">154,000</span>
        </div>

        <div className="homeSailProductTime">00:00:00 남음</div>
      </div>
    </div>
  );
}
