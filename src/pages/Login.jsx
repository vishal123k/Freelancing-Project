import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Projects and team."
      desc2="Please Login User Account."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
