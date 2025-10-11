// src/pages/CheckEmail.jsx

import React from 'react';
import styled from 'styled-components';

// Assets
import loginBg from '../assets/images/login-bg.png'; 
import logo from '../assets/icons/logo.png';
import illustration from '../assets/images/check-email-illustration.png'; // Apna naya asset import karein

// --- STYLES ---
// Layout styles (pehle se banaye hue)
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

const ContentSide = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 1024px) { width: 100%; }
`;

const ContentWrapper = styled.div`
  max-width: 450px; /* Thora zyada width for better spacing */
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

// Naye styles is page ke content ke liye
const CenteredContent = styled.div`
    text-align: center;
    padding: 2rem 0;
`;

const Illustration = styled.img`
    height: 150px;
    margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`;

const ResendText = styled.p`
    color: #4b5563;

    a {
        color: #7c3aed;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;


// --- COMPONENT ---
const CheckEmail = () => {
  return (
    <PageContainer>
      <ImageSide />
      <ContentSide>
        <ContentWrapper>
          <Header>
            <Logo src={logo} alt="Gift Card Logo" />
          </Header>
          
          <CenteredContent>
            <Illustration src={illustration} alt="Check your Email" />
            <Title>Check your Email</Title>
            <Subtitle>
                Thank you, check your email for instructions to reset your password
            </Subtitle>
            <ResendText>
                Don't receive an email? <a>Resend</a>
            </ResendText>
          </CenteredContent>

        </ContentWrapper>
      </ContentSide>
    </PageContainer>
  );
};

export default CheckEmail;