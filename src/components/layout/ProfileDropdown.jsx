// src/components/layout/ProfileDropdown.jsx

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

// --- STYLES ---

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px); /* Header ki height + 10px ka gap */
  right: 0;
  width: 200px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  z-index: 1000;
  overflow: hidden;
  padding: 0.5rem;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  color: #ef4444; /* Red for logout */
  font-weight: 500;
  font-size: 1rem;
  
  &:hover {
    background-color: #fee2e2;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f3f4f6;
  margin: 0.5rem 0;
`;

// --- COMPONENT ---

const ProfileDropdown = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Yahan logout ka logic aayega, jaise token clear karna etc.
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <DropdownContainer ref={ref}>
      <MenuList>
        <MenuItem to="/profile">
          <FiUser />
          My Profile
        </MenuItem>
        <MenuItem to="/settings"> {/* Yeh route hum baad mein banayeinge */}
          <FiSettings />
          Settings
        </MenuItem>
        <Divider />
        <LogoutButton onClick={handleLogout}>
          <FiLogOut />
          Logout
        </LogoutButton>
      </MenuList>
    </DropdownContainer>
  );
});

export default ProfileDropdown;