// src/components/dashboard/StatCard.jsx

import React from 'react';
import styled from 'styled-components';
import trendIcon from '../../assets/icons/dashboard/trend-icon.png'; // Trend icon ko SVG mein export karein to behtar hai

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
`;

const TopSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* UPDATED: props.bgColor ko props.$bgColor kar diya gaya hai */
  background-color: ${props => props.$bgColor || '#e0e7ff'}; 
  img {
    width: 24px;
    height: 24px;
  }
`;

const Info = styled.div`
  p {
    color: #6b7280;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }
`;

const TrendIcon = styled.img`
  align-self: flex-end;
  width: 40px;
`;

const StatCard = ({ icon, title, value, color }) => {
  return (
    <Card>
      <TopSection>
        {/* UPDATED: bgColor ko $bgColor kar diya gaya hai */}
        <IconWrapper $bgColor={color.bg}>
          <img src={icon} alt={title} />
        </IconWrapper>
        <Info>
          <p>{title}</p>
          <h3>{value}</h3>
        </Info>
      </TopSection>
      <TrendIcon src={trendIcon} alt="Trend" />
    </Card>
  );
};

export default StatCard;