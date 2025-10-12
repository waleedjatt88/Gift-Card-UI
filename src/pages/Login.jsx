import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; 

import loginBg from "../assets/images/login-bg.png";
import logo from "../assets/icons/logo.png";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { FiMail, FiLock, FiLink, FiEye } from "react-icons/fi";

const LoginContainer = styled.div`
  /* No changes here */
  display: flex;
  height: 100vh;
  width: 100%;
`;
const ImageSide = styled.div`
  /* No changes here */
  width: 50%;
  background: url(${loginBg}) no-repeat center center;
  background-size: cover;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const FormSide = styled.div`
  /* No changes here */
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

// New and Updated Styles
const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #7c3aed; /* Purple underline */
`;

const Logo = styled.img`
  height: 40px;
`;

const Title = styled.h2`
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 2.5rem;
  text-align: left;
`;

const OptionsWrapper = styled.div`
  /* No changes here */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 14px;
`;
const RememberMe = styled.div`
  /* No changes here */
  display: flex;
  align-items: center;
  input {
    margin-right: 8px;
  }
`;
const ForgotLink = styled(Link)`
  color: #7c3aed;
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExtraIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1.5rem;
  color: #6b7280;
`;

// Main Login Component
const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    console.log("Login successful, navigating to dashboard...");
    navigate("/dashboard");
  };
  return (
    <LoginContainer>
      <ImageSide />
      <FormSide>
        <FormWrapper>
          <Header>
            <Logo src={logo} alt="Gift Card Logo" />
          </Header>

          <Title>Login to your Account</Title>
          <Subtitle>Welcome back! please enter your detail</Subtitle>

          <form onSubmit={handleLoginSubmit}>
            <Input type="email" placeholder="Email" icon={<FiMail />} />
            <Input type="password" placeholder="Password" icon={<FiLock />} />

            <OptionsWrapper>
              <RememberMe>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </RememberMe>
              <ForgotLink to="/forgot-password">Forgot Password?</ForgotLink>
            </OptionsWrapper>

            <Button>Login</Button>
          </form>

          
        </FormWrapper>
      </FormSide>
    </LoginContainer>
  );
};

export default Login;
