// src/pages/DashboardPage.jsx

import React from 'react';
import styled from 'styled-components';
import StatCard from '../components/dashboard/StatCard';
import SalesChart from '../components/dashboard/SalesChart';
import { FiUsers, FiCreditCard, FiDollarSign, FiRepeat, FiCheckSquare, FiBriefcase, FiGlobe, FiList, FiTag, FiGrid, FiXCircle } from 'react-icons/fi';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DashboardPage = () => {
  const stats = [
    { icon: <FiUsers />, title: 'Total Users', value: '2123K' },
    { icon: <FiCreditCard />, title: 'No of Cards', value: '12323K' },
    { icon: <FiDollarSign />, title: 'Total Revenue', value: '$4876.98' },
    { icon: <FiRepeat />, title: 'Returned Cards', value: '2123K' },
    { icon: <FiCheckSquare />, title: 'Utilized cards', value: '12323K' },
    { icon: <FiBriefcase />, title: 'Purchased Gift Card', value: '$4876.98' },
    { icon: <FiGlobe />, title: 'Total Countries', value: '195' },
    { icon: <FiList />, title: 'Total Category', value: '8' },
    { icon: <FiTag />, title: 'Total Brand', value: '196' },
    { icon: <FiGrid />, title: 'Categorize Brands', value: '194' },
    { icon: <FiXCircle />, title: 'Uncategorize Brand', value: '4' },
  ];

  return (
    <div>
        <h1>Dashboard</h1>
        <StatsGrid>
            {stats.map(stat => (
                <StatCard 
                    key={stat.title} 
                    icon={stat.icon} 
                    title={stat.title} 
                    value={stat.value} 
                />
            ))}
        </StatsGrid>
        <SalesChart />
    </div>
  );
};

export default DashboardPage;