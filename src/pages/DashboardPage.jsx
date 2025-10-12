// src/pages/DashboardPage.jsx

import React from 'react';
import styled from 'styled-components';
import StatCard from '../components/dashboard/StatCard';
import SalesChart from '../components/dashboard/SalesChart';

// --- ICONS (Yeh aapko figma se export karke src/assets/icons/dashboard/ folder mein rakhne hain) ---
import iconTotalUsers from '../assets/icons/dashboard/total-users.png';
import iconNoOfCards from '../assets/icons/dashboard/no-of-cards.png';
import iconTotalRevenue from '../assets/icons/dashboard/total-revenue.png';
import iconReturnedCards from '../assets/icons/dashboard/returned-cards.png';
import iconUtilizedCards from '../assets/icons/dashboard/utilized-cards.png';
import iconPurchasedGiftCard from '../assets/icons/dashboard/purchased-gift-card.png';
import iconTotalCountries from '../assets/icons/dashboard/total-countries.png';
import iconTotalCategory from '../assets/icons/dashboard/total-category.png';
import iconTotalBrand from '../assets/icons/dashboard/total-brand.png';
import iconCategorizeBrands from '../assets/icons/dashboard/categorize-brands.png';
import iconUncategorizeBrand from '../assets/icons/dashboard/uncategorize-brand.png';

// --- STYLES (Updated Grid) ---
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  gap: 1.5rem;
  margin-bottom: 2rem;

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// --- COMPONENT ---
const DashboardPage = () => {
  // UPDATED: Data with new icons and colors
  const stats = [
    { icon: iconTotalUsers, title: 'Total Users', value: '2123k', color: { bg: '#EFE5FF' } },
    { icon: iconNoOfCards, title: 'No of Cards', value: '12323k', color: { bg: '#E5F7FF' } },
    { icon: iconTotalRevenue, title: 'Total Revenue', value: '$4876.98', color: { bg: '#E5FFF5' } },
    { icon: iconReturnedCards, title: 'Returned Cards', value: '2123k', color: { bg: '#EFE5FF' } },
    { icon: iconUtilizedCards, title: 'Utilized cards', value: '12323k', color: { bg: '#E5F7FF' } },
    { icon: iconPurchasedGiftCard, title: 'Purchased Gift Card', value: '$4876.98', color: { bg: '#E5FFF5' } },
    { icon: iconTotalCountries, title: 'Total Countries', value: '195', color: { bg: '#FFF4E5' } },
    { icon: iconTotalCategory, title: 'Total Category', value: '8', color: { bg: '#EFE5FF' } },
    { icon: iconTotalBrand, title: 'Total Brand', value: '196', color: { bg: '#E5F7FF' } },
    { icon: iconCategorizeBrands, title: 'Categorize Brands', value: '194', color: { bg: '#E5FFF5' } },
    { icon: iconUncategorizeBrand, title: 'Uncategorize Brand', value: '4', color: { bg: '#FFF4E5' } },
  ];

  return (
    <div>
      {/* <h1>Dashboard</h1> ko hata diya gaya hai design ke mutabiq */}
      <StatsGrid>
        {stats.map(stat => (
          <StatCard 
            key={stat.title} 
            icon={stat.icon} 
            title={stat.title} 
            value={stat.value}
            color={stat.color} // <-- Color prop ko pass kiya
          />
        ))}
      </StatsGrid>
      <SalesChart />
    </div>
  );
};

export default DashboardPage;