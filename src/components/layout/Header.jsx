// src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from 'react'; // <-- useState, useEffect, useRef ko import kiya
import styled from 'styled-components';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import avatar from '../../assets/images/avatar.png';
import NotificationsDropdown from './NotificationsDropdown'; // <-- Naya component import kiya

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  width: 100%;
`;

const ActionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative; /* Dropdown ko position dene ke liye yeh zaroori hai */
`;

const IconBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  color: #4b5563;
`;

const NotificationWrapper = styled(IconBox)`
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
    border: 2px solid white;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
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
  color: #374151;
`;

// --- COMPONENT ---

const Header = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown container

  // "Click outside" ko handle karne ke liye
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }
    // Event listener add karein
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup: component unmount hone par listener hata dein
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <HeaderContainer>
      <ActionItems>
        {/* Notification bell par click se dropdown toggle hoga */}
        <NotificationWrapper onClick={() => setNotificationsOpen(prev => !prev)}>
          <FiBell size={22} />
          <span className="badge">1</span>
        </NotificationWrapper>

        <ProfileWrapper>
          <Avatar src={avatar} alt="Admin" />
          <AdminName>Admin</AdminName>
          <FiChevronDown color="#6b7280" />
        </ProfileWrapper>

        {/* Agar state true hai to dropdown dikhayein */}
        {isNotificationsOpen && <NotificationsDropdown ref={dropdownRef} />}
      </ActionItems>
    </HeaderContainer>
  );
};

export default Header;