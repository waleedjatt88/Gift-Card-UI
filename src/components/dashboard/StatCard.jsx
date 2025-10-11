// src/components/dashboard/StatCard.jsx

import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi'; // Trend icon

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Value = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
`;

const IconWrapper = styled.div`
    font-size: 1.5rem;
    color: #a9a9b2;
`;

const Trend = styled.div`
    align-self: flex-end;
    color: #7c3aed;
`;

const StatCard = ({ icon, title, value }) => {
  return (
    <Card>
      <Content>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
      <Trend>
        <FiArrowUpRight size={24}/>
      </Trend>
    </Card>
  );
};

export default StatCard;