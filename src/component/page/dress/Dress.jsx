import "./dress.css";
import { products } from "../../../dummyData";

export default function Dress() {
  return (
    <div className="dress">
      <div className="dressWrapper">
        <div className="dressTitle">Dress</div>
        <div className="dressFilter">
          <div className="dressFilterLeft">
            <span className="dressFilterTitle">Filter Products :</span>
            <select className="dressFilterColor">
              <option className="dressFilterItem" value="Color">
                Color
              </option>
              <option className="dressFilterItem" value="White">
                White
              </option>
              <option className="dressFilterItem" value="Black">
                Black
              </option>
              <option className="dressFilterItem" value="Red">
                Red
              </option>
              <option className="dressFilterItem" value="Blue">
                Blue
              </option>
              <option className="dressFilterItem" value="Yellow">
                Yellow
              </option>
              <option className="dressFilterItem" value="Green">
                Green
              </option>
            </select>
            <select className="dressSize">
              <option className="dressFilterItem" value="Size">
                Size
              </option>
              <option className="dressFilterItem" value="XL">
                XL
              </option>
              <option className="dressFilterItem" value="L">
                L
              </option>
              <option className="dressFilterItem" value="M">
                M
              </option>
              <option className="dressFilterItem" value="S">
                S
              </option>
            </select>
          </div>
          <div className="dressFilterRight">
            <select className="dressEtc">
              <option className="dressEtcItem" value="mew">
                신상품순
              </option>
              <option className="dressEtcItem" value="purchase">
                판매량순
              </option>
              <option className="dressEtcItem" value="lowPrice">
                낮은가격순
              </option>
              <option className="dressEtcItem" value="highPrice">
                높은가격순
              </option>
            </select>
          </div>
        </div>
        <div className="dressProducts">
          {products.map((product) => (
            <div className="dressProduct" id={product.id}>
              <img src={product.img} alt="" className="dressImg" />
              <span className="dressProductTitle">{product.title}</span>
              <span className="dressProductPrice">{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
