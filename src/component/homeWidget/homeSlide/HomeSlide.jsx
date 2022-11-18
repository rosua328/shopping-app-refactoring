import { scrollList } from "../../../dummyData";
import "./homeSlide.css";
import { useState } from "react";

export default function HomeSlide() {
  return (
    <div className="homeSlide">
      <div className="homeSlideWrapper">
        <div
          className="homeSlideItem"
          // style={{
          //   backgroundImage:
          //     "url(https://images.pexels.com/photos/7181794/pexels-photo-7181794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          // }}
        >
          <div className="homeSlideLeft">
            <span className="homeSlideTitle">여름, 빨강, 정열</span>
            <span className="homeSlideSummary">여름에는 역시 정열의 빨강</span>
          </div>
          <div className="homeSlideRight">
            <img
              src="https://images.pexels.com/photos/7181794/pexels-photo-7181794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="homeSlideImg"
            />
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
