import React, { useState, useEffect } from "react";
import { Auth, DataStore, Hub } from "aws-amplify";
import './App.css';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import 'antd/dist/antd.css';
import SignupPage from './Screens/SignupPage';
import UserHome from "./Screens/UserHome";
import LoginPage from "./Screens/LoginPage";
import CategorySideBar from "./Components/CategorySideBar";
import Feed from "./Screens/Feed";
function App() {
  const [user, setUser] = useState(undefined);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);


  if (user === undefined) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <p>loading.....</p>
      </div>
    );
  }
  
  return (
    <div className="app">
    <Routes>
    {user ? (<>
      <Route exact path="/" element={<UserHome/>} />
      <Route exact path="/feed/:name" element={
        <div>
          <CategorySideBar/>
         
          
        </div>
      
      
     } />
    </>
        

    ): (
      <>
      <Route exact path="/" element={<Home />} />
     
      <Route exact path="/auth" element={<SignupPage/>} />
      <Route exact path="/auth/login" element={<LoginPage/>} />
      </>

    ) }
 
     
         
          </Routes>
          
    </div>
  );
}

export default App;
