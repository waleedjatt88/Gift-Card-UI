
import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header'; 


const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 260px; // Sidebar ki width ke barabar
  padding: 0 2rem 2rem 2rem; // <-- Padding update ki hai
  background-color: #f4f7fe; // Light background for content area
  min-height: 100vh;
`;

const DashboardLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header /> 
        <Outlet /> 
      </MainContent>
    </LayoutContainer>
  );
};
export default DashboardLayout;