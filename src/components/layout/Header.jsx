// src/components/layout/Header.jsx

import React from 'react';
import styled from 'styled-components';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import avatar from '../../assets/images/avatar.png'; // Make sure you have an avatar image here

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;

const ActionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Space between notification and profile */
`;

// NEW: Common style for both icon boxes
const IconBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #ffffff; /* Light border */
  border-radius: 8px;
  padding: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  #ffffff; /* Icon color */
`;

const NotificationWrapper = styled(IconBox)`
  /* This inherits all styles from IconBox */
  
  .badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background-color: #7c3aed;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    border: 2px solid white; /* Adds a nice touch */
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AdminName = styled.span`
  font-weight: 600;
  color: #374151; /* Darker text color */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ActionItems>
        <NotificationWrapper>
          <FiBell size={22} />
          <span className="badge">1</span>
        </NotificationWrapper>

        <ProfileWrapper>
          <Avatar src={avatar} alt="Admin" />
          <AdminName>Admin</AdminName>
          <FiChevronDown color="#6b7280" />
        </ProfileWrapper>
      </ActionItems>
    </HeaderContainer>
  );
};

export default Header;