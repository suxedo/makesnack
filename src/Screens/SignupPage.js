import React, { useState } from "react";
import { Button, message, Steps, Layout, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { generatePath, NavLink, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const { Step } = Steps;

const { Header, Content, Footer } = Layout;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function SignupPage() {
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
  const handleChangeFirstName = (value) => {
    setFirstName(value.target.value);
    console.log("Finish:", value.target.value);
  };
  const handleChangeLastName = (value) => {
    setFirstName(value.target.value);
    console.log("Finish:", value.target.value);
  };
  const handleChangePassword = (value) => {
    setPassword(value.target.value);
    console.log("Finish:", value.target.value);
  };
  const handleChangeOtp = (element, index) => {
    if (isNaN(element.value)) return false;
    seOtp([...otp.map((item, i) => (i === index ? element.value : item))]);
    console.log("Finish:", otp);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const onRegisterPressed = async (data) => {
  

    try {
    
      await Auth.signUp({
        username: email,
        password:password,
        attributes: { email, preferred_username: email  },
      });
      message.success("Successfully signed up");
      console.log(email, password);
    } catch (e) {
      console.log("Oops", e.message);
    }
  };
  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(email, otp.join(""));
      message.success("Successfully confirmed");
    } catch (e) {
      console.alert('Oops', e.message);
    }
  };
  const onClickSignUp = () => {
    if (current === 1) {
      onRegisterPressed();
      setCurrent(current + 1);

    }
    if (current === 2) {
      onConfirmPressed();
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
             Create your account password
            </h1>
          </div>
          <div>
          Your passwords must be at least 8 characters long, and contain at least one letter and one digit
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
         {/**
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
              onClick={() => next()}
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
          
          
            */}
          

          <div style={{ marginTop: "28px" }}>
            <p
              style={{ color: "#757575", lineHeight: "20px", fontSize: "14px" }}
            ></p>
          </div>
        </div>
      ), 
    },
    {
      title: "Last",
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
             Enter the 6-digit code sent to you at:{email}
            </h1>
          </div>
          <div>
            {otp.map((item, index) => {
              return (
                <Input
                  bordered={{ borderColor: "#757575" }}
                  key={index}
                  style={{
                    width: "44px",
                    marginRight: "8px",
                    height: "44px",
                    borderColor: "black",
                    backgroundColor: "#fafafa",
                  }}
                  value={item}
                  maxLength="1"
                  onChange={(e) => handleChangeOtp(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <div>
          Tip : Make sure to check your inbox and spam folders
          </div>
          <Button
            style={{
              padding: "10px 12px",
              borderRadius: "38px",
              fontWeight: "500",
              minHeight: "50px",
              backgroundColor: "rgb(238, 238, 238)",
              color: "black",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "138px",
              marginTop: "20px",
            }}
            type="default"
            onClick={() => next()}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
            Resend
            </div>
          </Button>
       
        </div>
      ),
    },
    {
      title: "Fourt",
      content: (
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
          <div style={{ marginBottom: "13px" }}>
            <h1
              style={{
                fontSize: "26px",
                color: "#000000",
                lineHeight: "40px",
                fontWeight: "400",
              }}
            >
            What's your name?
            </h1>
          </div>
          <div style={{marginBottom:'10px'}}>
          Let us know how to properly address you
            
          </div>
          <div style={{marginBottom:'10px'}}>
            <Input
            
              value={firstname}
              
              onChange={handleChangeFirstName}
              placeholder="Enter first name"
              size="large"
            />
          </div>
          <div>
            <Input
              required="last"
              value={lastname}
             
              onChange={handleChangeLastName}
              placeholder="Enter last name"
              size="large"
            />
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
                onClick={() => message.success("Processing complete!")}
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

export default SignupPage;
