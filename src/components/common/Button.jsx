// src/components/common/Button.jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600; /* Semi-bold */
  color: white;
  background-color: #7c3aed; /* Solid purple color */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6d28d9; /* Thora dark purple on hover */
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;