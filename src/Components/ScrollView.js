import { Button } from "antd";
import React, { useRef } from "react";
import "./ScrollView.css";

function ScrollView() {
  const scrollViewRef = useRef(null);
  const scrollHorizontally = (e) => {};

  const scrolll = (e) => {
    scrollViewRef.current.scrollLeft -= 1610;
  };
  const scrollr = (e) => {
    scrollViewRef.current.scrollLeft += 1610;
  };

  return (
    <div className="main-scroll-div">
      <div>
        <Button onClick={() => scrolll()} className="category__feed__btn">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="leftArrow"
          >
            <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
          </svg>
        </Button>
      </div>
      <div className="cover">
        <div ref={scrollViewRef} className="scroll-images">
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://canary.contestimg.wish.com/api/image/fetch?general_image_name=US_national_picnic_day_EN-hp1-web-1654890269614.png&w=1&h=1&m=1000"
                alt="kol"
              />
            </div>
          </li>
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder2-web_06b2d8d686e91925353ddf153da5d939.webp"
                alt="kol"
              />
            </div>
          </li>
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://bbdu.ac.in/wp-content/uploads/2020/02/utkarsh-website-banner-background.jpg"
                alt="kol"
              />
            </div>
          </li>
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://canary.contestimg.wish.com/api/image/fetch?general_image_name=US_national_picnic_day_EN-hp1-web-1654890269614.png&w=1&h=1&m=1000"
                alt="kol"
              />
            </div>
          </li>
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://canary.contestimg.wish.com/api/image/fetch?general_image_name=US_national_picnic_day_EN-hp1-web-1654890269614.png&w=1&h=1&m=1000"
                alt="kol"
              />
            </div>
          </li>
          <li className="width">
            <div className="child">
              <img
                className="child-image"
                src="https://canary.contestimg.wish.com/api/image/fetch?general_image_name=US_national_picnic_day_EN-hp1-web-1654890269614.png&w=1&h=1&m=1000"
                alt="kol"
              />
            </div>
          </li>
        </div>
      </div>
      <div>
        <Button onClick={() => scrollr()} className="category__feed__btn">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="rightArrow"
          >
            <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
          </svg>{" "}
        </Button>
      </div>
    </div>
  );
}

export default ScrollView;
