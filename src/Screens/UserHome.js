import React, { useState } from "react";
import "./UserHome.css";
import { useHistory } from "react-router-dom";
import {Button, Input, Layout, Space, Radio, Collapse } from "antd";
import Navbar from "../Components/Navbar";
import ScrollView from "../Components/ScrollView";



import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import CategorySideBar from "../Components/CategorySideBar";
import CategoryItem from "../Components/CategoryItem";
import Feed from "./Feed";
const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function UserHome() {
  const [switchCheck, setSwitchCheck] = useState(true);

  const onChangeSwitch = () => {
    setSwitchCheck(!switchCheck);
  };
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('top');
  const [sort, setSort] = useState(1);

  
  const onChangeSort = (e) => {
    console.log('radio checked', e.target.value);
    setSort(e.target.value);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <div>
      <Layout className="layout">
        <div  className={visible? 'fixed':''}>
            <div style={{display:'flex', flexDirection:'column'}}>

            <div style={{ display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'white', height:'76px', padding:'20px' }}>
            <Button
    style={{marginRight:'32px'}}
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
         <div className="logo">
        <img
          style={{ width: "auto", height: "24px" }}
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
      </div>
      {!visible && (
        <>
         <div className="header__switch">
        <div className="header__switchOptions">
          <p
            onClick={() => onChangeSwitch()}
            style={{ fontWeight: "500", fontSize: "14px" }}
          >
            Delivery
          </p>
          <p
            onClick={() => onChangeSwitch()}
            style={{
              fontWeight: "500",
              fontSize: "14px",
              padding: "10px",
            }}
          >
            Pickup
          </p>
        </div>

        <div
          onClick={() => onChangeSwitch()}
          className={`header__switchHandle ${
            switchCheck === false ? "false" : ""
          }`}
        >
          <div className="header__switchHandle__inner">
            {switchCheck === false ? "Pickup" : "Delivery"}
          </div>
        </div>
      </div>
        </>
        )}
        {!visible && (
        <>
            
      <div className="header__positionBtn">
      <svg width="16px" height="24px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Deliver to" role="img" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path></svg>
        Nigeria.now
        
      </div>
        </>
      )}
         <div className="hd">
      <div className="header__inputUser">
        <Input
        onClick={() => showDrawer()}
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
      {visible && (
            <div onClick={()=> onClose() }>
                   <svg style={{width:'16px', height:'16px'}} aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="o6 lc ca cb"><path d="M21.1 5.1l-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9z"></path></svg>

                
            </div>
            
        )}
        {!visible && (
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
            color: "#ffffff",
            backgroundColor: "#000000",
            textAlign: "center",
            justifyContent: "center",
            alignItem: "center",
            display: "flex",
          }}
          type="default"
          shape="round"
          icon={
            <svg style={{width:'16px', height:'16px', color:'white'}} aria-hidden="true" focusable="false" viewBox="0 0 16 16" class="c8 c9 ca cb"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"></path></svg>
          }
          size="large"
        >
           0 carts
        </Button>

      </div>

    )}
    
   
       
                
            </div>
            <div style={{marginTop:'60px'}} className={visible? 'searchDropdownShow':'searchDropdown'}>

djfbhdjbfdhfbdjh

</div>
                
            </div>
           
   
       
            
      
     
            


        </div>
    
    
       
        <Content
          style={{
            padding: "0 50px",
            backgroundColor:'white'
          }}
        >
          <div className="nav-grid">
          
            <Navbar/>
              
        
          
            <ScrollView/>
           
              
           
         
       
            
          </div>
      
   
      <div style={{margin:'24px 0px 0px', height:'1px', border:'1px solid rgb(266,266,266)  ', }} />


     
    
          
        </
        Content>
      <Content style={{backgroundColor:'white'}}>
       <div className="category">
        <CategorySideBar/>
        <CategoryItem/>

        
      


        <div>

        
        
          
        </div>
       
           
       
     
            
        </div>
      </Content>
     
        
      </Layout>

    </div>
  );
}

export default UserHome;
