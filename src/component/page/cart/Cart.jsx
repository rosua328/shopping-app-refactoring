import { Clear } from "@mui/icons-material";
import "./cart.css";

export default function Cart() {
  return (
    <div className="cart">
      <div className="cartWrapper">
        <div className="cartTop">
          <button className="cartContinueButton">쇼핑 계속하기</button>
          <button className="cartCheckButton">주문하기</button>
        </div>
        <div className="cartBottom">
          <div className="cartLeft">
            <div className="cartItem">
              <button className="cartItemCancel">
                <Clear />
              </button>
              <div className="cartItemLeft">
                <img
                  src="https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="cartItemImg"
                />
              </div>
              <div className="cartItemCenter">
                <span className="cartItemTitle">무쌍바지</span>
                <div className="cartItemColor"></div>
                <span className="cartItemSize">XS</span>
              </div>
              <div className="cartItemRight">
                <div className="cartItemAddContainer">
                  <button className="cartItemMinus">-</button>
                  <span className="cartItemNumber">3</span>
                  <button className="cartItemPlus">+</button>
                </div>
                <span className="cartItemPrice">13,000원</span>
              </div>
            </div>
            <div className="cartItem">
              <div className="cartItemLeft">
                <img
                  src="https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="cartItemImg"
                />
              </div>
              <div className="cartItemCenter">
                <span className="cartItemTitle">무쌍바지</span>
                <div className="cartItemColor"></div>
                <span className="cartItemSize">XS</span>
              </div>
              <div className="cartItemRight">
                <div className="cartItemAddContainer">
                  <button className="cartItemMinus">-</button>
                  <span className="cartItemNumber">3</span>
                  <button className="cartItemPlus">+</button>
                </div>
                <span className="cartItemPrice">13,000원</span>
              </div>
            </div>
            <div className="cartItem">
              <div className="cartItemLeft">
                <img
                  src="https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="cartItemImg"
                />
              </div>
              <div className="cartItemCenter">
                <span className="cartItemTitle">무쌍바지</span>
                <div className="cartItemColor"></div>
                <span className="cartItemSize"></span>
              </div>
              <div className="cartItemRight">
                <div className="cartItemAddContainer">
                  <button className="cartItemMinus">-</button>
                  <span className="cartItemNumber">3</span>
                  <button className="cartItemPlus">+</button>
                </div>
                <span className="cartItemPrice">13,000원</span>
              </div>
            </div>
          </div>
          <div className="cartRight">
            <div className="cartRightTitle">주문목록</div>
            <div className="cartContainer">
              <span className="cartTitle">금액</span>
              <span className="cartContent">12,000원</span>
            </div>
            <div className="cartContainer">
              <span className="cartTitle">배송비</span>
              <span className="cartContent">4,000원</span>
            </div>
            <div className="cartContainer">
              <span className="cartTitle">할인금액</span>
              <span className="cartContent">-6,000원</span>
            </div>
            <div className="cartTotalContainer">
              <span className="cartTotalTitle">총 금액</span>
              <span className="cartTotalPrice">10,000원</span>
            </div>
            <button className="cartRightButton">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
