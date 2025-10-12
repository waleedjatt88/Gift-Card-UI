
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/images/login-bg.png'; 
import logo from '../assets/icons/logo.png';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { FiLock } from 'react-icons/fi';

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
`;

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleConfirm = (event) => {
    event.preventDefault();
    alert("Password has been reset successfully!"); 
    navigate('/login');
  };

  return (
    <PageContainer>
      <ImageSide />
      <FormSide>
        <FormWrapper>
          <Header>
            <Logo src={logo} alt="Gift Card Logo" />
          </Header>

          <Title>Reset your Password</Title>
          <Subtitle>
            Please enter your new password and confirm password
          </Subtitle>

          <form onSubmit={handleConfirm}>
            <Input type="password" name="password" placeholder="Password" icon={<FiLock />} />
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" icon={<FiLock />} />
            <Button>Confirm</Button>
          </form>

        </FormWrapper>
      </FormSide>
    </PageContainer>
  );
};

export default ResetPassword;