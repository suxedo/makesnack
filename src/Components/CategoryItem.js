import { Button } from "antd";
import React, { useRef } from "react";
import "./CategoryItem.css";
import restaurant from "../data/restaurant.js";
import Feed from "../Screens/Feed";

function CategoryItem() {
  const todaysOfferRef = useRef(null);
  const scrollViewRef = useRef(null);

  const scrolltodaysOfferL = (e) => {
    todaysOfferRef.current.scrollLeft -= window.innerWidth;
  };
  const scrolltodaysOfferR = (e) => {
    todaysOfferRef.current.scrollLeft += window.innerWidth;
  };

  const scrolll = (e) => {
    scrollViewRef.current.scrollLeft -= window.innerWidth;
  };
  const scrollr = (e) => {
    scrollViewRef.current.scrollLeft += window.innerWidth;
  };

  return (
    <div className="category__item">
      <div>
        <div style={{ height: "25px" }}></div>
        <div className="category__feed__grid">
          <div className="category__feed__item">
            <div>
              <section>
                <div className="category__feed__header">
                  <div>
                    <div className="category__feed__title">In a rush?</div>
                    <div className="category__feed__text">
                      Here’s the fastest delivery for you
                    </div>
                  </div>
                  <div className="category__feed__btnWrapper">
                    <a href="/fdff"> See all</a>
                    <div style={{ width: "40px", height: "1px" }}></div>
                    <div style={{ display: "flex" }}>
                      <Button
                        onClick={() => scrolll()}
                        className="category__feed__btn"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          className="leftArrow"
                        >
                          <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                        </svg>
                      </Button>
                      <div style={{ width: "4px", height: "1px" }}></div>
                      <Button
                        onClick={() => scrollr()}
                        className="category__feed__btn"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          className="rightArrow"
                        >
                          <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="category__feed__scroll">
                  <div ref={scrollViewRef} className="category__feed__first">
                    {restaurant.map((item, index) => {
                      return (
                        <li>
                          <div className="category__width">
                            <img src={item.image} alt="img" />
                            <div>
                              <div className="category__feed__details">
                                <div className="restaurant__name">
                                  {item.name}
                                </div>
                                <div
                                  style={{
                                    height: "1px",
                                    width: "4px",
                                    flexShrink: "0",
                                  }}
                                />
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/top_eats.png"
                                  alt="img"
                                />
                              </div>
                              <div>
                                <div className="restaurant__feed__deliveryWrap">
                                  <div style={{marginRight:'5px'}}>{item.deliveryFee}$ Fee</div>

                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",

                                    }}
                                  >
                                    <div>{item.minDeliveryTime}</div>.
                                    <div>{item.maxDeliveryTime} min</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>



        <div style={{ height: "25px" }}></div>

        <div className="category__feed__grid">
          <div className="category__feed__item">
            <div>
              <section>
                <div className="category__feed__header">
                  <div>
                    <div className="category__feed__title">Today's offers</div>
                   
                  </div>
                  <div className="category__feed__btnWrapper">
                    <a href="/fdff"> See all</a>
                    <div style={{ width: "40px", height: "1px" }}></div>
                    <div style={{ display: "flex" }}>
                      <Button
                        onClick={() => scrolltodaysOfferL()}
                        className="category__feed__btn"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          className="leftArrow"
                        >
                          <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                        </svg>
                      </Button>
                      <div style={{ width: "4px", height: "1px" }}></div>
                      <Button
                        onClick={() => scrolltodaysOfferR()}
                        className="category__feed__btn"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          className="rightArrow"
                        >
                          <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="category__feed__scroll">
                  <div ref={todaysOfferRef} className="category__feed__first">
                    {restaurant.map((item, index) => {
                      return (
                        <li>
                          <div className="category__width">
                            <img src={item.image} alt="img" />
                            <div>
                              <div className="category__feed__details">
                                <div className="restaurant__name">
                                  {item.name}
                                </div>
                                <div
                                  style={{
                                    height: "1px",
                                    width: "4px",
                                    flexShrink: "0",
                                  }}
                                />
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/top_eats.png"
                                  alt="img"
                                />
                              </div>
                              <div>
                                <div className="restaurant__feed__deliveryWrap">
                                  <div style={{marginRight:'5px'}}>{item.deliveryFee}$ Fee</div>

                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",

                                    }}
                                  >
                                    <div>{item.minDeliveryTime}</div>.
                                    <div>{item.maxDeliveryTime} min</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
      </div>
      <Feed/>
     
    </div>
  );
}

export default CategoryItem;
