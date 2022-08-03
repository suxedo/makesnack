import React, { useState } from "react";
import { Button, message, Steps, Layout, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { generatePath, NavLink, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const { Step } = Steps;

const { Header, Content, Footer } = Layout;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function LoginPage() {
  const [current, setCurrent] = useState(0);
  const [username, setUsername] = useState("lana");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [otp, seOtp] = useState(new Array(6).fill());
  const navigate = useNavigate();

  const handleChangeEmail = (value) => {
    setEmail(value.target.value);
    console.log("Finish:", value.target.value);
  };
 
  const handleChangePassword = (value) => {
    setPassword(value.target.value);
    console.log("Finish:", value.target.value);
  };
 
  const onForgotPasswordPressed = () => {


  }

  const onSignInPressed = async (data) => {
  
    try {
      const response = await Auth.signIn(email, password);
      console.log(response);
      window.location.reload(false)
    
    } catch (e) {
      console.warn("Oops", e.message);
    }

    navigate("/");
    
  
  };

  const onClickSignUp = () => {
    if (current === 0) {
     
      setCurrent(current + 1);

    }
    if (current === 1) {
      onSignInPressed();
      setCurrent(current + 1);
    }
    else{
      setCurrent(current + 1);

    }

    
  };

  

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "First",
      content: (
        <div
          style={{
            justifyContent: "space-between",
            height: "100%",
            paddingTop: "16px",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <h1
              style={{
                fontSize: "26px",
                color: "#000000",
                lineHeight: "40px",
                fontWeight: "400",
              }}
            >
              What's your phone number or email?
            </h1>
          </div>
          <div>
            <Input
              required="email"
              pattern={EMAIL_REGEX}
              onChange={handleChangeEmail}
              placeholder="Enter phone number or email"
              size="large"
            />
          </div>
          <div style={{ marginTop: "28px" }}>
            <p
              style={{ color: "#757575", lineHeight: "20px", fontSize: "14px" }}
            >
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated dialer, from Uber and its affiliates to the
              number provided. Text “STOP” to 89203 to opt out.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Second",
      content:(
        <div
          style={{
            justifyContent: "space-between",
            height: "100%",
            paddingTop: "16px",
            flexDirection: "column",
            display: "flex",
            width: "100%",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <h1
              style={{ fontSize: "26px", color: "#000000", fontWeight: "400" }}
            >
            Welcome back, {email}
            </h1>
          </div>
        
          <div>
            <Input.Password
              width="100%"
              style={{
                borderColor: "black",
                backgroundColor: "#fafafa",
                width: "100%",
              }}
              onChange={handleChangePassword}
              size="large"
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
      
           <div
            style={{
              paddingTop: "30px",
              flexDirection: "column",
              display: "flex",
              flex: 1,
              width: "200px",
            }}
          >
            <Button
              shape="round"
              style={{
                marginBottom: "15px",
                backgroundColor: "rgb(238, 238, 238)",
                fontWeight: "500",
                width: "100%",
              }}
              type="default"
              onClick={() => onForgotPasswordPressed()}
            >
              i forgot my password
            </Button>
            <Button
              style={{
                backgroundColor: "rgb(238, 238, 238)",
                fontWeight: "500",
                width: "150px",
              }}
              shape="round"
              type="default"
              onClick={() => next()}
            >
              I can't sign in
            </Button>
          </div>
          <div style={{ marginTop: "28px" }}>
            <p
              style={{ color: "#757575", lineHeight: "20px", fontSize: "14px" }}
            ></p>
          </div>
        </div>
      ), 
    },
   
  ];
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",

          background: "#000000",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <img
            style={{ width: "auto", height: "24px" }}
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="logo"
          />
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
          marginTop: 64,
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",

              width: "432px",
            }}
            className="steps-content"
          >
            {steps[current].content}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
            className="steps-action"
          >
            {current > 0 && (
              <Button
                style={{
                  padding: "14px 16px",
                  borderRadius: "38px",
                  fontWeight: "500",
                  minHeight: "50px",
                  backgroundColor: "#eee",
                  color: "black",
                }}
                onClick={() => prev()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ display: "block" }}
                >
                  <title>Arrow left</title>
                  <path
                    d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => onSignInPressed()}
              >
                Done
              </Button>
            )}

            {current < steps.length - 1 && (
              <Button
                style={{
                  padding: "14px 16px",
                  borderRadius: "38px",
                  fontWeight: "500",
                  minHeight: "50px",
                  backgroundColor: "rgb(0, 0, 0)",
                  color: "rgb(255, 255, 255)",
                }}
                disabled={email === "" ? true : false}
                type="primary"
                onClick={() =>onClickSignUp()}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  Next
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ paddingLeft: "5px", display: "block" }}
                  >
                    <title>Arrow right</title>
                    <path
                      d="M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Button>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default LoginPage;
