// src/pages/ForgotPassword.jsx

import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate pehle se import hai, good!

// Assets (wahi jo login mein use ki thin)
import loginBg from '../assets/images/login-bg.png'; 
import logo from '../assets/icons/logo.png';

// Reusable Components
import Input from '../components/common/Input';
import Button from '../components/common/Button';

// Icons
import { FiMail } from 'react-icons/fi';

// --- STYLES (Inmein koi change nahi) ---
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const ImageSide = styled.div`
  width: 50%;
  background: url(${loginBg}) no-repeat center center;
  background-size: cover;
  @media (max-width: 1024px) { display: none; }
`;

const FormSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 1024px) { width: 100%; }
`;

const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #7c3aed;
`;

const Logo = styled.img`
  height: 40px;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 2.5rem;
  text-align: left;
  line-height: 1.5;
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 2rem;
  text-align: center;
  color: #111827;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// --- COMPONENT ---
const ForgotPassword = () => {
  // <-- CHANGE 1: useNavigate hook ko initialize kiya
  const navigate = useNavigate();

  // <-- CHANGE 2: Form submit ko handle karne ke liye function banaya
  const handleContinueClick = (event) => {
    event.preventDefault(); // Page ko reload hone se rokta hai
    
    // Yahan API call ka logic aayega
    // Call successful hone ke baad, hum agle page par navigate karenge
    navigate('/check-email');
  };

  return (
    <PageContainer>
      <ImageSide />
      <FormSide>
        <FormWrapper>
          <Header>
            <Logo src={logo} alt="Gift Card Logo" />
          </Header>

          <Title>Reset your password</Title>
          <Subtitle>
            Enter the email address associated with your account and 
            we will send you a link to reset your password.
          </Subtitle>

          {/* <-- CHANGE 3: form tag mein onSubmit event lagaya */}
          <form onSubmit={handleContinueClick}>
            <Input type="email" placeholder="Angela.lau" icon={<FiMail />} />
            <Button>Continue</Button>
          </form>

          <BackLink to="/login">Back to Sign In</BackLink>

        </FormWrapper>
      </FormSide>
    </PageContainer>
  );
};

export default ForgotPassword;