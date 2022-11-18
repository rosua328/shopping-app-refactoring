import "./detail.css";

export default function Detail() {
  return (
    <div className="detail">
      <div className="detailWrapper">
        <div className="detailLeft">
          <img
            src="https://images.pexels.com/photos/13727428/pexels-photo-13727428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="detailImg"
          />
        </div>
        <div className="detailRight">
          <div className="detailContainer">
            <span className="detailTitle">멋진 청바지</span>
            <span className="detailContent">
              따뜻한 기모 안감과 스트릿한 길이로 패션어블한 감성을 더한 데님
              바지
            </span>
            <span className="detailPrice">15,000원</span>
          </div>
          <hr />
          <div className="detailColorContainer">
            <span className="detailColorTitle">Color</span>
            <div className="detailColorMenu">
              <button className="detailColor"></button>
              <button className="detailColor"></button>
              <button className="detailColor"></button>
            </div>
          </div>
          <hr />
          <div className="detailSizeContainer">
            <span className="detailSizeTitle">Size</span>
            <select name="" id="" className="detailSize">
              <option value="">SIZE</option>
              <option value="">XL</option>
              <option value="">L</option>
              <option value="">M</option>
              <option value="">S</option>
            </select>
          </div>
          <hr />
          <div className="detailCountContainer">
            <button className="detailCount">-</button>
            <span className="detailNumber">3</span>
            <button className="detailCount">+</button>
          </div>
          <button className="detailAddCart">add cart</button>
        </div>
      </div>
    </div>
  );
}
