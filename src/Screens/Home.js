import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Dropdown,
  Button,
  Modal,
  TimePicker,
  Calendar,
  Select,
  Row,
  Col,
  Drawer,
} from "antd";
import "./Home.css";
import {
  CalendarFilled,
  ClockCircleFilled,
  DownOutlined,
} from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import moment from "moment";
import { Link } from "react-router-dom";
const { Option } = Select;

const { Header, Content, Footer } = Layout;
function Home(props) {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("mail");
  const [currentTime, setCurrentTime] = useState(moment());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);


  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };


  const getDays = (start, end) => {
    let days = []; // array to store days
    start = moment(new Date(start));
    end = moment(new Date(end));
    for (let i = 0; i <= 6; i++) {
      days.push(moment(start).add(i, "days").format("ddd MMM D"));
    } // loop through all days
    return days;
  };

  useEffect(() => {
    setTimeSlots(createTimeSlots(`${moment().format("LT")}`, "20:00"));
  }, []);

  const createTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, "LT");
    let endTime = moment(toTime, "LT");
    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }
    let timeSlots = [];
    while (startTime <= endTime) {
      timeSlots.push(new moment(startTime).format("LT"));
      startTime.add(30, "minutes");
    }
    return timeSlots;
  };

  
  const handleChangeDate = (value) => {
    setSelectedDate(value);
  };
  const handleChangeTime = (value) => {
    setSelectedTime(value);
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = <Menu onClick={onClick}> sdsds </Menu>;

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollSearch);
  });

  const handleScroll = () => {
    window.pageYOffset > 100 ? !nav && setNav(true) : nav && setNav(false);
  };
  const handleScrollSearch = () => {
    window.pageYOffset > 400
      ? !search && setSearch(true)
      : nav && setSearch(false);
  };
  const date = (
    <div>
      {getDays(`${moment().format("l")}`).map((day, index) => {
        return (
          <div className="modal__DropdownOptions" key={index}>
            {day}
          </div>
        );
      })}
    </div>
  );

  const menu = (
    <Menu
      style={{ fontWeight: "700", padding: "10px" }}
      items={[
        {
          label: (
            <div
              style={{
                lineHeight: "20px",
                fontWeight: "700",
                fontSize: "16px",
                flexGrow: "1",
                marginBottom: "10px",
              }}
            >
              {" "}
              <ClockCircleFilled style={{ marginRight: "5px" }} /> Deliver now
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div
              style={{
                lineHeight: "20px",
                fontWeight: "700",
                fontSize: "16px",
                flexGrow: "1",
              }}
              onClick={showModal}
            >
              <CalendarFilled style={{ marginRight: "5px" }} /> Schedule for
              later
            </div>
          ),
          key: "1",
        },
      ]}
    />
  );
  return (
    <Layout>
      <Header
        className="scrollNav"
        style={
          !nav === true
            ? {
                position: "fixed",
                zIndex: 1,
                width: "100%",
                background: "transparent",
                height: "96px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }
            : {
                position: "fixed",
                zIndex: 1,
                width: "100%",
                height: "96px",
                background: "white",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                boxShadow: "rgb(226 226 226) 0px -2px 0px inset",
              }
        }
      >
        <div className="header">
          <div className="headerLeft">
            <div>
              <Button
              onClick={showDrawer}
                type="text"
                icon={
                  <svg
                    style={{ width: "24px", height: "24px" }}
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path>
                  </svg>
                }
              />
            </div>
            <div className="logo">
              <img
                style={{ width: "auto", height: "24px" }}
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="logo"
              />
            </div>
            <div
              className={
                !search === true ? "header__inputHide" : "header__input"
              }
            >
              <Input
                className="ff"
                bordered={false}
                size="large"
                placeholder="Enter delivery address"
                prefix={
                  <svg
                    width="24px"
                    height="24px"
                    style={{ marginRight: "15px" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                }
              />
            </div>
          </div>

          <div className="headerRight">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  marginRight: "16px",
                }}
                type="default"
                shape="round"
                icon={
                  <svg
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "4px",
                    }}
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"
                    ></path>
                  </svg>
                }
                size="large"
              >
                Log in
              </Button>

              <Button
                type="default"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#000000",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItem: "center",
                  display: "flex",
                }}
                shape="round"
                size="large"
              >
                <div>Sign up</div>
              </Button>
            </div>
          </div>
        </div>
      </Header>
      <Content>
        <div className="main-content">
          <div className="home__content">
            <div className="home__addressSearch">
              <h1 className="home__addressHeading">Order food to your door</h1>
              <div className="home__inputWrapper">
                <div className="home__inputContent">
                  <div className="home__input">
                    <Input
                      bordered={false}
                      size="large"
                      placeholder="Enter delivery address"
                      prefix={
                        <svg
                          width="24px"
                          height="24px"
                          style={{ marginRight: "15px" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      }
                    />
                  </div>
                </div>
                <div className="home__btn">
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                        padding: "10px",
                      }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <ClockCircleFilled />
                      <div
                        style={{
                          lineHeight: "20px",
                          fontWeight: "700",
                          fontSize: "16px",
                          flexGrow: "1",
                          marginLeft: "15px",
                        }}
                      >
                        Deliver now
                      </div>

                      <DownOutlined />
                    </div>
                  </Dropdown>
                </div>
                <div className="home__addressBtn">Find Food</div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          width="410px"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="ModalHeading">Pick a time</div>
          <Select
            size="large"
            defaultValue={moment().format("ddd MMM D")}
            style={{
              width: "100%",
              backgroundColor: "rgb(238, 238, 238)",
              marginBottom: "20px",
              height: "50px",
            }}
            bordered={false}
            onChange={handleChangeDate}
          >
            {getDays(`${moment().format("l")}`).map((day, index) => {
              return (
                <Option key={index} value={day}>
                  {day}
                </Option>
              );
            })}
          </Select>
          <Select
            size="large"
            defaultValue={timeSlots[0]}
            style={{
              width: "100%",
              backgroundColor: "rgb(238, 238, 238)",
              fontWeight: "700",
              height: "50px",
            }}
            bordered={false}
            onChange={handleChangeTime}
          >
            {timeSlots.map((time, index) => (
              <Option key={index} value={time}>
                {time}

                {timeSlots[index + 1] ? "-" + timeSlots[index + 1] : ""}
              </Option>
            ))}
          </Select>

          <div>
            <Button
              style={{
                width: "100%",
                marginTop: "24px",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "0px",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "56px",
                fontWeight: "500",
              }}
              type="text"
              color="black"
              onClick={handleOk}
            >
              Schedule
            </Button>
            <Button
              className="modalBtn2"
              style={{
                width: "100%",
                marginTop: "12px",
                backgroundColor: "#eeeeee",
                color: "#000000",
                borderRadius: "0px",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "56px",
                fontWeight: "500",
                marginBottom: "45px",
              }}
              type="text"
              onClick={handleOk}
            >
              Deliver now
            </Button>
          </div>
        </Modal>
      </Content>
      <Content>
        <div className="home__mainContent2">
          <div className="home__optionsGrid">
            <div className="home__optionsGridItem">
              <img
                className="home__optionImg"
                src="https://i2.wp.com/varietychef.ng/wp-content/uploads/2021/04/variety-chef-kitchen-scaled.jpg?fit=2560%2C1707&ssl=1"
                alt="option"
              />

              <p className="home__optionsHeading">Feed your employees</p>

              <a href=""> Create a business account </a>

              <div className="home__optionsGridItemContent"></div>
            </div>
            <div className="home__optionsGridItem">
              <img
                className="home__optionImg"
                src="https://media.istockphoto.com/photos/chef-preparing-pizza-at-pizzeria-picture-id1359028975?b=1&k=20&m=1359028975&s=170667a&w=0&h=y3r8kKg4y6XqGVY_f85qcdP3xT2MtDZa9qiBduy-Lf0="
                alt="option"
              />

              <p className="home__optionsHeading">Your restaurant, delivered</p>

              <a href=""> Add your restaurant </a>

              <div className="home__optionsGridItemContent"></div>
            </div>
            <div className="home__optionsGridItem">
              <img
                className="home__optionImg"
                src="https://media.istockphoto.com/photos/last-straw-picture-id516329534?k=20&m=516329534&s=612x612&w=0&h=th8WZ3t4sM5T2eixJ4W0DwMO3ozefvI49CB8GvUvC6Y="
                alt="option"
              />

              <p className="home__optionsHeading">Deliver with MakeiSnack</p>

              <a href=""> Sign up to deliver </a>

              <div className="home__optionsGridItemContent"></div>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{}}>
        <div className="footer__FlexGrid">
          <div className="footer__FlexGridItem">
            <img
              style={{ height: "24px", marginBottom: "64px" }}
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt="logo"
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img
                  style={{ height: "40px" }}
                  src="http://assets.stickpng.com/images/5a902db97f96951c82922874.png"
                  alt="Download on the App Store"
                />
              </div>
              <div>
                <img
                  style={{ height: "50px" }}
                  src="http://assets.stickpng.com/images/5a902dbf7f96951c82922875.png"
                  alt="Get it on Google Play"
                />
              </div>
            </div>
          </div>
          <div className="footer__FlexGridItemList">
           <p>Get Help</p>
                <p>Buy gift cards</p>
                <p>Add your restaurant</p>
                <p>Sign up to deliver</p>
                <p>Create a business account</p>
                <p>Save on your first order</p>
          </div>
          <div className="footer__FlexGridItemList">
         
                <p>Restaurants near me</p>
                <p>View all cities</p>
                <p>View all countries</p>
                <p>Pickup near me</p>
                <p>About MakeiSnack</p>
                <p>English</p> 
             
           
          
          </div>
        </div>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      <Drawer
      width='300px'
    
        
        placement='left'
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        key='left'
      ><div className="drawer__Content">
            <div>
            <div className="drawer__BtnSignup">
                <Link style={{textDecoration:'none',color:'white' }} to='/auth'>
                Sign up

                </Link>
             
                
            </div>
            <div className="drawer__BtnLogin">
              <Link style={{textDecoration:'none',color:'black' }} to='/auth/login'>
              Log in

              
              </Link>
              
                
            </div>
            <div className="drawer__BtnLinkWrapper">
                <ul>
                    <li className="drawer__BtnListLink">
                        <a className="drawer__BtntLink" href="">Create a business account</a>
                    </li>
                    <li className="drawer__BtnListLink">
                        <a  className="drawer__BtntLink"  href="">Add your restaurant
</a>
                    </li>
                    <li className="drawer__BtnListLink">
                        <a  className="drawer__BtntLink"  href="">Sign up to deliver</a>
                    </li>
                </ul>
                
            </div>
                
            </div>
            <div>
                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <img style={{height:'56px', width:'56px', marginRight:'16px'}} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="ddd"/>

                <div  className="drawer__Bottom">
                <p>There's more to love in the app.</p>
                    
                    </div>
                   
                    
                </div>
                <div className="a">
                    <div className="drawer__DownloadIphoneBtn">
                    <svg style={{marginRight:'8px', height:'16px', width:'16px'}} aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"></path></svg>
                    iPhone


                    </div>

                    <div className="drawer__DownloadIphoneBtn">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" style={{height:'16px', width:'16px',marginRight:'8px'}} class="ca cb c3 cc"><g><path fillRule="evenodd" clipRule="evenodd" d="M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z"></path><path d="M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z"></path></g></svg>
                    Android


                    </div>

                </div>
               
                
                
            </div>
          
      
            
        </div>
       
      </Drawer>
    </Layout>
  );
}

export default Home;
