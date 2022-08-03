import React from 'react'
import { useParams } from 'react-router-dom';
import restaurant from "../data/restaurant.js";
import './Feed.css'

function Feed() {

  const { name } = useParams();

  return (
    <div className='feed__Grid'>

{restaurant.map((item, index) => {
                      return (
                        <li className='feed__width'>
                          <div className="feed__wrapper">
                            <div className='feed__wrapperItem'>
                                <div className='feed__ImageWrapper'>
                                <img className='feed__image' src={item.image} alt="img" />
                                <div className='feed__span'>
                                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" style={{width:'20px', height:'20px', fill:'rgb(255, 255, 255)'}}><path d="M16 5c2.5 0 4 1.9 4 4.2 0 1.2-.6 2.3-1.3 3.1C17.5 13.5 12 18 12 18s-5.5-4.5-6.7-5.7C4.5 11.5 4 10.4 4 9.2 4 6.9 5.5 5 8 5c1.7 0 3.3 1.6 4 3 .7-1.4 2.3-3 4-3zm0-3c-1.5 0-2.9.6-4 1.4C10.9 2.5 9.5 2 8 2 4 2 1 5.1 1 9.2c0 1.9.8 3.7 2.2 5.2 1.4 1.5 8.8 7.5 8.8 7.5s7.4-6 8.8-7.5c1.4-1.5 2.2-3.3 2.2-5.2C23 5.1 20 2 16 2z"></path></svg>
                                    
                                </div>
                                    
                                </div>

                                <div className='feed__DetailsWrapper'>
                              <div className="feed__detailsName">
                                <div className="feed__name">
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
                                  style={{ width: "28px", height: "28px" }}
                                  src="https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/top_eats.png"
                                  alt="img"
                                />
                              </div>
                              <div className='feed__priceWrapper'>

                                <div className='feed__price' >
                                    <span className='feed__priceSpan'>
                                    {item.deliveryFee}$ Fee

                                        
                                        </span>               <div style={{marginRight:'5px'}}></div>
                                    
                                </div>
                                <span className='feed__dot' >&nbsp;•&nbsp;</span>

                                <span>.</span>



                                <div
                                className='feed__deliveryTimeWrapper'
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",

                                    }}
                                  >
                                    <span className='feed__deliveryTime'>{item.minDeliveryTime}</span> -
                                    <span className='feed__deliveryTime'>{item.maxDeliveryTime} min</span>
                                   
                                  </div>
                                
                              
                              


                              </div>
                            </div>
                                
                            </div>
                           
                            
                          </div>
                        </li>
                      );
                    })}


        



    </div>
  )
}

export default Feed