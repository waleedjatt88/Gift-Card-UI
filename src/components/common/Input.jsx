// src/components/common/Input.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const IconWrapper = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 14px 14px 45px; /* Left padding for icon */
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #7c3aed; /* Purple color */
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
  }
`;

const ToggleVisibilityButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #9ca3af;
`;

const Input = ({ type, placeholder, icon, name }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = (e) => {
    e.preventDefault(); 
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <InputWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <StyledInput type={inputType} name={name} placeholder={placeholder} />
      {type === 'password' && (
        <ToggleVisibilityButton onClick={toggleVisibility}>
          {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
        </ToggleVisibilityButton>
      )}
    </InputWrapper>
  );
};

export default Input;