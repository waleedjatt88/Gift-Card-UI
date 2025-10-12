
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import giftCardLogo from '../../assets/icons/logowhite.png'; 

import { FiGrid, FiList, FiUsers, FiShoppingBag, FiCreditCard, FiTag, FiFileText } from 'react-icons/fi';

const SidebarContainer = styled.aside`
  width: 260px;
  background-color: #1a0033; // Dark Purple
  color: #a9a9b2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
  padding: 0 0.5rem 1.5rem 0.5rem;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  height: 45px; // Adjust height as needed
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: #a9a9b2;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  font-size: 0.95rem;

  &:hover {
    background-color: #2a0055;
    color: #fff;
  }

  // CHANGE: &.active se hum active link ko style karte hain
  &.active {
    background-color: #7c3aed; // Bright Purple
    color: #fff;
  }
`;

const Sidebar = () => {
  const menuItems = [
      { path: '/dashboard', icon: <FiGrid />, name: 'Dashboard' },
      { path: '/categories', icon: <FiList />, name: 'Categories' },
      { path: '/users', icon: <FiUsers />, name: 'Users' },
      { path: '/orders', icon: <FiShoppingBag />, name: 'Orders' },
      { path: '/gift-cards', icon: <FiCreditCard />, name: 'Gift Cards' },
      { path: '/total-brands', icon: <FiTag />, name: 'Total Brands' },
      { path: '/policies', icon: <FiFileText />, name: 'Policies' },
  ];

  return (
    <SidebarContainer>
        <LogoContainer>
            <Logo src={giftCardLogo} alt="Gift Card Logo" />
        </LogoContainer>
        <MenuList>
            {menuItems.map(item => (
                <MenuItem to={item.path} key={item.name}>
                    {item.icon}
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;